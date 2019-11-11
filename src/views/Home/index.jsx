import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import Styles from './index.module.scss'

export default class index extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176
  }
  componentDidMount () {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        // data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        data: [
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2779908258,3927406589&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2899380176,654137666&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4143242631,2776812472&fm=11&gp=0.jpg'
        ]
      });
    }, 100);
  }
  render () {
    return (
      <WingBlank>
        <Carousel className={Styles.space_carousel}
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}>
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img className={Styles.indexImg}
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // 火窗口调整大小事件改变高度
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }} />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
