import React, { PureComponent, forwardRef, createRef } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import styles from './styles.scss';

const maxLenNum = (aNum, bNum) => (aNum > bNum ? aNum : bNum).toString().length;

const isstr = any => Object.prototype.toString.call(any) === '[object String]';

const num2PadNumArr = (num, len) => {
  const padLeftStr = (rawStr, lenNum) =>
    rawStr.length < lenNum ? padLeftStr(`0${rawStr}`, lenNum) : rawStr;
  const str2NumArr = rawStr => rawStr.split('').map(Number);
  return str2NumArr(padLeftStr(num.toString(), len)).reverse();
};

// 借鉴 https://github.com/gaoryrt/number-flip/blob/master/number-flip.js
export default class Flip extends PureComponent {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    easeFn: PropTypes.func,
    systemArr: PropTypes.array,
    direct: PropTypes.bool,
    separator: PropTypes.array,
    separateEvery: PropTypes.number
  };

  constructor(props) {
    super(props);
    const {
      from,
      to,
      duration,
      delay,
      easeFn,
      systemArr,
      direct,
      separator,
      separateEvery = 3
    } = props;
    this.state = {
      ctnrArr: [],
      duration: duration * 1000,
      from,
      to,
      direct,
      separator,
      separateEvery,
      delay,
      easeFn,
      systemArr,
      node: [],
      height: 0
    };
    this.beforeArr = [];
    this.afterArr = [];
    this.ctnrArr = [];
    this.height = 0;
    this.getRefsHeight = createRef();
  }

  componentDidMount() {
    const {
      // duration,
      direct,
      separator,
      separateEvery,
      delay,
      // easeFn,
      systemArr,
      from,
      to
    } = this.state;

    const digits = maxLenNum(from, to);

    // console.log(digits);
    const getNewNode = [];
    [...Array(digits).keys()].forEach(i => {
      const ctnr = forwardRef((props, ref) => (
        <div
          ref={ref}
          className={`${styles['ctrn-init']} ${styles.ctrn} ${styles[`ctrn${i}`]}`}
          style={props.propClass}
        >
          {systemArr.map(j => (
            <div key={j} className={styles.digit}>
              {j}
            </div>
          ))}
          <div className={styles.digit}>{systemArr[0]}</div>
        </div>
      ));
      this.ctnrArr.unshift(ctnr);
      getNewNode.push(ctnr);
      this.beforeArr.push(0);
      if (!separator || separateEvery || i === digits - 1 || (digits - i) % separateEvery !== 1) {
        return null;
      }
      const sprtrStr = isstr(separator) ? separator : separator.shift();
      const sprtr = () => <div className={styles.sprtr}>{sprtrStr}</div>;
      getNewNode.push(sprtr);
      return null;
    });
    this.setState(
      {
        node: getNewNode
      },
      () => {
        this.height = this.getRefsHeight.current.clientHeight / (systemArr.length + 1);
        this.setState({
          height: this.height
        });
        this.ctnrArr.map((item, d) =>
          this._draw({
            digit: d,
            per: 1,
            alter: Math.floor(from / 10 ** d)
          })
        );
        if (to === undefined) return;
        if (delay) {
          setTimeout(() => this.flipTo({ to, direct }), delay * 1000);
        } else {
          this.flipTo({ to, direct });
        }
      }
    );
  }

  _draw({ digit, per, alter }) {
    const { systemArr } = this.state;
    const { clientHeight } = this.getRefsHeight.current;
    if (this.height !== clientHeight / (systemArr.length + 1)) {
      this.height = clientHeight / (systemArr.length + 1);
    }
    const from = this.beforeArr[digit];
    const modNum = (((per * alter + from) % 10) + 10) % 10;
    const translateY = `translateY(${-modNum * this.height}px)`;
    this.setState(prev => ({
      ctnrArr: prev.ctnrArr.concat(translateY)
    }));
  }

  checkStyles(index) {
    const { ctnrArr } = this.state;
    const transform = ctnrArr[index];
    if (!transform) return {};
    return {
      transform,
      WebkitTransform: transform
    };
  }

  flipTo({ to, duration, easeFn, direct }) {
    const { from, easeFn: easeFnState, duration: durationState, systemArr } = this.state;
    const len = this.ctnrArr.length;
    this.beforeArr = num2PadNumArr(from, len);
    this.afterArr = num2PadNumArr(to, len);
    const draw = per => {
      let temp = 0;
      for (let d = len - 1; d >= 0; d -= 1) {
        const alter = this.afterArr[d] - this.beforeArr[d];
        temp += alter;
        const fn = easeFn || easeFnState;
        this._draw({
          digit: d,
          per: fn(per),
          alter: direct ? alter : temp
        });
        temp *= 10;
      }
    };
    const start = performance.now();
    const dur = duration * 1000 || durationState;
    const tick = now => {
      const elapsed = now - start;
      draw(elapsed / dur);
      if (elapsed < dur) requestAnimationFrame(tick);
      else {
        this.setState({
          from: to
        });
        draw(1);
      }
    };
    window.addEventListener('resize', () => {
      this.height = this.getRefsHeight.current.clientHeight / (systemArr.length + 1);
      this.setState({
        height: this.height
      });
      draw(1);
    });
    requestAnimationFrame(tick);
  }

  render() {
    const { node, height } = this.state;
    return (
      <div className={styles['number-flip']} style={{ height: `${height}px` }}>
        {node.map((Comp, i) => (
          <Comp key={i} ref={i === 0 && this.getRefsHeight} propClass={this.checkStyles(i)} />
        ))}
      </div>
    );
  }
}

const easeFn = pos => {
  const i = pos / 0.5;
  if (i / 0.5 < 1) {
    return 0.5 * i ** 3;
  }
  return 0.5 * ((i - 2) ** 3 + 2);
};

Flip.defaultProps = {
  from: 0,
  to: 0,
  duration: 0.5,
  delay: 0,
  easeFn,
  systemArr: [...Array(10).keys()],
  direct: true,
  separator: null,
  separateEvery: 3
};
