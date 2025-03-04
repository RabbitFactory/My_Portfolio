import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ label }) => {
  return (
    <StyledWrapper>
      <button className="ui-btn">
        <span>{label}</span>
      </button>
    </StyledWrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

const StyledWrapper = styled.div`
  .ui-btn {
    --btn-default-bg: #010314;
    --btn-padding: 15px 20px;
    --btn-hover-bg: rgb(51, 51, 51);
    --btn-transition: .3s;
    --btn-letter-spacing: .1rem;
    --btn-animation-duration: 1.2s;
    --btn-shadow-color: rgba(0, 0, 0, 0.137);
    --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
    --hover-btn-color: #FAC921;
    --default-btn-color: #fff;
    --font-size: 16px;
    --font-weight: 600;
    --font-family: Menlo, Roboto Mono, monospace;
  }

  .ui-btn {
    width: 140px;
    box-sizing: border-box;
    padding: var(--btn-padding);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-btn-color);
    font: var(--font-weight) var(--font-size) var(--font-family);
    background: var(--btn-default-bg);
    cursor: pointer;
    transition: var(--btn-transition);
    overflow: hidden;
    box-shadow: var(--btn-shadow);
    border-radius: 10px;
    border: 2px solid #2A2B3A;
  }

  .ui-btn span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
  }

  .ui-btn:hover, .ui-btn:focus {
    background: var(--btn-default-bg);
    box-shadow: 0px 0px 10px 0px #FAC921;
    border: 2px solid #FAC921;
  }

  .ui-btn:hover span, .ui-btn:focus span {
    color: var(--hover-btn-color);
  }

  @keyframes chitchat {
    0% { content: "#"; }
    5% { content: "."; }
    10% { content: "^{"; }
    15% { content: "-!"; }
    20% { content: "#$_"; }
    25% { content: "№:0"; }
    30% { content: "#{+."; }
    35% { content: "@}-?"; }
    40% { content: "?{4@%"; }
    45% { content: "=.,^!"; }
    50% { content: "?2@%"; }
    55% { content: "\;1}]"; }
    60% { content: "?{%:%"; }
    65% { content: "|{f[4"; }
    70% { content: "{4%0%"; }
    75% { content: "'1_0<"; }
    80% { content: "{0%"; }
    85% { content: "]>'"; }
    90% { content: "4"; }
    95% { content: "2"; }
    100% { content: ""; }
  }

  @media (max-width: 480px) {
    .ui-btn {
      width: 110px;
      font-size: 14px;
    }
  }
`;

export default Button;
