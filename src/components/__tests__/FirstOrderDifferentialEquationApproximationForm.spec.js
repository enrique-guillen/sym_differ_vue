import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';

import FirstOrderDifferentialEquationApproximationForm
  from '../FirstOrderDifferentialEquationApproximationForm.vue';

describe('FirstOrderDifferentialEquationApproximationForm', () => {
  it('renders properly', () => {
    const wrapper = mount(FirstOrderDifferentialEquationApproximationForm, {});

    const expectedText = 'Expression:Undetermined function name (y): Variable name (t): Initial value';

    expect(wrapper.text()).toContain(expectedText);
  });

  it('responds to getExpressionDerivative as expected', () => {
    const mockPlugins = {
      global: {
        provide: {
          firstOrderDifferentialEquationApproximator() { },
          differentialEquationIllustrator() { },
        },
      },
    };

    const wrapper = mount(FirstOrderDifferentialEquationApproximationForm, mockPlugins);

    wrapper.find('.approximate-button').trigger('click');
  });

  it('has the expected content after calling updateView with successful response', async () => {
    const wrapper = mount(FirstOrderDifferentialEquationApproximationForm, {});

    const mockSuccessfulResponse = {
      message: '',
      approximatedSolution: [
        { abscissa: 0.0, ordinate: 0.0 },
        { abscissa: 0.125, ordinate: 0.125 },
      ],
      showApproximationExpressionPath: true,
      showFailure: false,
    };

    const expectedLabeledResponse = ['1', '0.000', '0.000', '2', '0.125', '0.125'];

    await wrapper.vm.updateView(mockSuccessfulResponse);

    expect(wrapper.find('.labeled-response').exists()).toBe(true);
    expect(wrapper.find('.labeled-failure').exists()).toBe(false);

    const labeledResponseText
      = wrapper
        .findAll('.labeled-response td')
        .map(el => el.text());

    expect(labeledResponseText)
      .toEqual(expectedLabeledResponse);
  });

  it('sets the expected values after calling updateImage', async () => {
    const wrapper = mount(FirstOrderDifferentialEquationApproximationForm, {});

    const mockSuccessfulResponse = {
      message: '',
      approximatedSolution: [
        { abscissa: 0.0, ordinate: 0.0 },
        { abscissa: 0.125, ordinate: 0.125 },
      ],
      showApproximationExpressionPath: true,
      showFailure: false,
    };

    await wrapper.vm.updateView(mockSuccessfulResponse);

    const mockImageResponse = { image: '<svg>...</svg>' };

    await wrapper.vm.updateImage(mockImageResponse);

    expect(wrapper.find('.differential-equation-approximation-img').element.src)
      .toEqual('data:image/svg+xml;base64, PHN2Zz4uLi48L3N2Zz4=');
  });

  it('has the expected content after calling updateView with failure response', async () => {
    const wrapper = mount(FirstOrderDifferentialEquationApproximationForm, {});

    const mockFailureResponse = {
      message: 'there_was_a_problem',
      approximatedSolution: [],
      showApproximationExpressionPath: false,
      showFailure: true,
    };

    await wrapper.vm.updateView(mockFailureResponse);

    expect(wrapper.find('.first-order-differential-equation-approximation-error').element.value)
      .toEqual('there_was_a_problem');

    expect(wrapper.find('.labeled-response').exists()).toBe(false);
    expect(wrapper.find('.labeled-failure').exists()).toBe(true);
  });

  it('resets the expected values after calling resetResponseToInitialState', async () => {
    const wrapper = mount(FirstOrderDifferentialEquationApproximationForm, {});

    await wrapper.vm.updateView({
      message: 'there_was_a_problem',
      approximatedSolution: [],
      showApproximationExpressionPath: false,
      showFailure: true,
    });

    await wrapper.vm.resetResponseToInitialState();

    expect(wrapper.find('.expression-text').element.value).toEqual('');
    expect(wrapper.find('.labeled-response').exists()).toBe(false);
    expect(wrapper.find('.labeled-failure').exists()).toBe(false);
  });
});
