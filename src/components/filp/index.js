import React, { PureComponent, forwardRef, createRef } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import styles from './styles.css';

const maxLenNum = (aNum, bNum) => (aNum > bNum ? aNum : bNum).toString().length;

const isstr = any => Object.prototype.toString.call(any) === '[object String]';

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
      beforeArr,
      afterArr,
      ctnrArr,
      duration,
      direct,
      separator,
      separateEvery,
      delay,
      easeFn,
      systemArr,
      from,
      to
    } = this.state;
    console.log(
      beforeArr,
      afterArr,
      ctnrArr,
      duration,
      direct,
      separator,
      separateEvery,
      delay,
      easeFn,
      systemArr
    );

    const digits = maxLenNum(from, to);
    const getNewNode = [];
    [...Array(digits).keys()].forEach(i => {
      const ctnr = forwardRef((props, ref) => (
        <div ref={ref} className={`${styles['ctrn-init']} ${styles.ctrn} ${styles[`ctrn${i}`]}`}>
          {systemArr.map(j => (
            <div key={j} className={styles.digit}>
              {i}
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
        console.log(this.ctnrArr);
        this.ctnrArr.map((item, d) =>
          this._draw({
            digit: d,
            per: 1,
            alter: Math.floor(from / 10 ** d)
          })
        );
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
    console.log(this.ctnrArr[digit], translateY);
    // this.ctnrArr[digit].style.webkitTransform = translateY;
    // this.ctnrArr[digit].style.transform = translateY;
  }

  render() {
    const { node, height } = this.state;
    return (
      <div className={styles['number-flip']} style={{ height: `${height}px` }}>
        {node.map((Comp, i) => (
          <Comp key={i} ref={i === 0 && this.getRefsHeight} />
        ))}
      </div>
    );
  }
}

Flip.defaultProps = {
  from: 0,
  to: 0,
  duration: 0.5,
  delay: 0,
  easeFn: () => {}, // pos => ((pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 3) : 0.5 * (Math.pow(pos - 2, 3) + 2)),
  systemArr: [...Array(10).keys()],
  direct: true,
  separator: null,
  separateEvery: 3
};
