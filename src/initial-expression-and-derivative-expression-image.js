const initialImage = `
  <svg version="1.1"
       width="900" height="900"
       xmlns="http://www.w3.org/2000/svg">




    <!-- Legend  -->
      <circle cx="20" cy="20" r="5" fill="blue"/>

      <text x="40" y="30" font-size="1.5em" id="ordinate-name" font-family="Cantarell">
        Expression: Not defined
      </text>

      <circle cx="20" cy="50" r="5" fill="red"/>

      <text x="40" y="60" font-size="1.5em" id="ordinate-name" font-family="Cantarell">
        Derivative: Not defined
      </text>




    <!-- Axis names  -->
      <text x="20" y="450" font-size="1.5em" font-style="italic" id="ordinate-name" font-family="Cantarell">
        y
      </text>

      <text x="450" y="880" font-size="1.5em" font-style="italic" id="abscissa-name" font-family="Cantarell">
        Not defined
      </text>




      <text x="0"
            y="6.0"
            transform="translate(60, 100)">
        10.0
      </text>

      <path
        d="M 0   0.0
           L 700 0.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="76.0"
            transform="translate(60, 100)">
        8.0
      </text>

      <path
        d="M 0   70.0
           L 700 70.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="146.0"
            transform="translate(60, 100)">
        6.0
      </text>

      <path
        d="M 0   140.0
           L 700 140.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="216.0"
            transform="translate(60, 100)">
        4.0
      </text>

      <path
        d="M 0   210.0
           L 700 210.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="286.0"
            transform="translate(60, 100)">
        2.0
      </text>

      <path
        d="M 0   280.0
           L 700 280.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="356.0"
            transform="translate(60, 100)">
        0.0
      </text>

      <path
        d="M 0   350.0
           L 700 350.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="426.0"
            transform="translate(60, 100)">
        -2.0
      </text>

      <path
        d="M 0   420.0
           L 700 420.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="496.0"
            transform="translate(60, 100)">
        -4.0
      </text>

      <path
        d="M 0   490.0
           L 700 490.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="566.0"
            transform="translate(60, 100)">
        -6.0
      </text>

      <path
        d="M 0   560.0
           L 700 560.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="636.0"
            transform="translate(60, 100)">
        -8.0
      </text>

      <path
        d="M 0   630.0
           L 700 630.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="0"
            y="706.0"
            transform="translate(60, 100)">
        -10.0
      </text>

      <path
        d="M 0   700.0
           L 700 700.0"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />




      <text x="0.0" y="0" transform="translate(90, 820)">
        -10.0
      </text>

      <path
        d="M 0.0 0
           L 0.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="70.0" y="0" transform="translate(90, 820)">
        -8.0
      </text>

      <path
        d="M 70.0 0
           L 70.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="140.0" y="0" transform="translate(90, 820)">
        -6.0
      </text>

      <path
        d="M 140.0 0
           L 140.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="210.0" y="0" transform="translate(90, 820)">
        -4.0
      </text>

      <path
        d="M 210.0 0
           L 210.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="280.0" y="0" transform="translate(90, 820)">
        -2.0
      </text>

      <path
        d="M 280.0 0
           L 280.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="350.0" y="0" transform="translate(90, 820)">
        0.0
      </text>

      <path
        d="M 350.0 0
           L 350.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="420.0" y="0" transform="translate(90, 820)">
        2.0
      </text>

      <path
        d="M 420.0 0
           L 420.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="490.0" y="0" transform="translate(90, 820)">
        4.0
      </text>

      <path
        d="M 490.0 0
           L 490.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="560.0" y="0" transform="translate(90, 820)">
        6.0
      </text>

      <path
        d="M 560.0 0
           L 560.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="630.0" y="0" transform="translate(90, 820)">
        8.0
      </text>

      <path
        d="M 630.0 0
           L 630.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />
      <text x="700.0" y="0" transform="translate(90, 820)">
        10.0
      </text>

      <path
        d="M 700.0 0
           L 700.0 700"
        style="fill:none; stroke:#000000; stroke-width:0.8985; stroke-dasharray:5,5"
        transform = "translate(100, 100)"
      />




    <path
      id="graph-perimeter"
      d="M 0,   0
           700, 0
           700, 700
           0,   700
           Z"
      style="
        fill:none;
        stroke:#000000;
        stroke-width:0.8985;
        stroke-linecap:butt;
        stroke-linejoin:miter;
        stroke-miterlimit:10;
        stroke-opacity:1
      "
      transform="translate(100, 100)"
    />




  </svg>
`.trim();

export { initialImage };
