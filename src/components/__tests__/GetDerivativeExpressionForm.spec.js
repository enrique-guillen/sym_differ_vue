import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import GetDerivativeExpressionForm from '../GetDerivativeExpressionForm.vue';

describe('GetDerivativeExpressionForm', () => {
  it('renders properly', () => {
    const wrapper = mount(GetDerivativeExpressionForm, {});
    expect(wrapper.text()).toContain('Your expression:Your variable:DeriveClearResponse:');
  });

  it('responds to getExpressionDerivative as expected', () => {
    const wrapper = mount(GetDerivativeExpressionForm, {
      global: {
        provide: {
          derive() { },
          imager() { },
        },
      },
    });
    wrapper.find('.derive-button').trigger('click');
  });

  it('sets the expected values after calling setExpressionDerivativeResponse', async () => {
    const wrapper = mount(GetDerivativeExpressionForm, {});

    await wrapper.vm.setExpressionDerivativeResponse({
      derivativeExpressionText: '3',
      showGetExpressionDerivativeFailed: false,
      showGetExpressionDerivativeSucceeded: true,
    });

    expect(wrapper.find('.derivative-expression-text').element.value).toEqual('3');
    expect(wrapper.find('.labeled-response').exists()).toBe(true);
    expect(wrapper.find('.labeled-failure').exists()).toBe(false);
  });

  it('sets the expected values after calling setExpressionAndExpressionDerivativeImage', async () => {
    const wrapper = mount(GetDerivativeExpressionForm, {});

    await wrapper.vm.setExpressionAndExpressionDerivativeImage('<svg>...</svg>');

    expect(wrapper.find('.differentiation-form-img').element.src).toEqual('data:image/svg+xml;base64, dW5kZWZpbmVk');
  });

  it('resets the expected values after calling resetResponseToInitialState', async () => {
    const wrapper = mount(GetDerivativeExpressionForm, {});

    await wrapper.vm.setExpressionDerivativeResponse({
      derivativeExpressionText: '3',
      showGetExpressionDerivativeFailed: false,
      showGetExpressionDerivativeSucceeded: true,
    });

    expect(wrapper.find('.derivative-expression-text').element.value).toEqual('3');
    expect(wrapper.find('.labeled-response').exists()).toBe(true);
    expect(wrapper.find('.labeled-failure').exists()).toBe(false);

    await wrapper.vm.resetResponseToInitialState();

    expect(wrapper.find('.derivative-expression-text').element.value).toEqual('');
    expect(wrapper.find('.labeled-response').exists()).toBe(true);
    expect(wrapper.find('.labeled-failure').exists()).toBe(false);
  });

  it('sets the expected values after calling setExpressionDerivativeError', async () => {
    const wrapper = mount(GetDerivativeExpressionForm, {});

    await wrapper.vm.setExpressionDerivativeError({
      message: 'invalid_syntax_error',
      showGetExpressionDerivativeFailed: true,
      showGetExpressionDerivativeSucceeded: false,
    });

    expect(wrapper.find('.derivative-expression-text').element.value).toEqual('invalid_syntax_error');
    expect(wrapper.find('.labeled-response').exists()).toBe(false);
    expect(wrapper.find('.labeled-failure').exists()).toBe(true);
  });
});
