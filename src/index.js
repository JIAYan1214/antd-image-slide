/**
 * Created by zeyuan on 2018/12/22
 */

import Swiper from 'Swiper'
import React from 'react'
import ReactDom from 'react-dom'
import { Modal, Icon } from 'antd';
import style from './index.less'

export default class ImgSlide extends React.Component{
    static defaultProps = {
        visible:false,
        showIndex:0,
        imgList:[],
        onHide:()=>{}
    }
    constructor(props){
        console.log(props)
        super(props)
        this.state = {
            visible: false,
            degs: {}
        }
        this.swiper = null;
    }

    componentDidMount(){
        setTimeout(()=>{this.swiperInit()},200)
    }

    componentWillUnmount(){
        this.swiper.destroy(true,true)
        this.swiperSmall.destroy(true,true)
    }

    hideModal = () => {
        this.props.onHide()
    }

    swiperInit(){
        if(this.swiper){
            return
        }
        let degs = {}
        this.props.imgList.forEach((item,index)=>{
            degs[index] = {}
            degs[index].deg = 0
            degs[index].scale = 1
        })
        this.setState({
            visible:true,
            degs:degs
        })
        const {showIndex} = this.props
        this.swiper = new Swiper('.swiper-container', {
            observer:true,
            touchRatio:0,
            initialSlide:showIndex,
            zoom: {
                toggle: false,
            },
            spaceBetween: 10
        });

        this.swiperSmall = new Swiper('.swiper-container-small', {
            initialSlide:showIndex,
            spaceBetween: 12,
            centeredSlides: true,
            slidesPerView: 'auto',
            loopedSlides:this.props.imgList.length,
            touchRatio: 0,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        this.swiper.controller.control = this.swiperSmall;
        this.swiperSmall.controller.control = this.swiper;
    }

    swiperZoomIn = () =>{
        let degs = this.state.degs
        if(degs[this.swiper.activeIndex].scale === 3){
            return;
        }
        this.swiper.zoom.in()
        degs[this.swiper.activeIndex].scale = 3
        this.setState({
            degs:degs
        })
    }

    swiperZoomOut = () =>{
        let degs= this.state.degs
        if(degs[this.swiper.activeIndex].scale === 1){
            return;
        }
        this.swiper.zoom.out()
        degs[this.swiper.activeIndex].scale = 1
        this.setState({
            degs:degs
        })
    }

    swiperRotate = () =>{
        let degs = this.state.degs
        let deg = degs[this.swiper.activeIndex].deg
        degs[this.swiper.activeIndex].deg = deg - 90
        this.setState({
            degs:degs
        })
        this.swiper.update(true)
    }

    render(){
        const { imgList } = this.props;

        return(
            <Modal
                style={{'top':'50px'}}
                visible={this.props.visible}
                footer={null}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                width={820}
                className="swiper_modal"
                destroyOnClose={true}
            >
                <div className="swiper_modal_body" >
                    <div className="swiper-container" style={{'opacity':(this.state.visible?1:0)}}>
                        <div className="swiper-wrapper">
                            {imgList ? imgList.map((item,index) =>{
                                const pic = this.state.degs[index] || {}
                                return(
                                    <div className="swiper-slide" key={item}>
                                        <div className="swiper-zoom-container">
                                            <img alt='' src={item} rotate={(pic.deg || 0)} style={{'transform': 'rotate(' + (pic.deg || 0) + 'deg) scale('+(pic.scale || 1)+')'}}/>
                                        </div>
                                    </div>
                                )}
                            ):null}
                        </div>
                    </div>
                    <div className='swiper-container-small-container'>
                        <div className="swiper-container-small">
                            <div className="swiper-wrapper">
                                {imgList ? imgList.map((item,index) =>{
                                    const pic = this.state.degs[index] || {}
                                    return(
                                        <div className="swiper-slide" key={item+'_small'}>
                                            <div className="swiper-zoom-container">
                                                <img alt="" src={item} style={{'transform': 'rotate(' + (pic.deg || 0) + 'deg)'}}/>
                                            </div>
                                        </div>
                                    )}
                                ):null}
                            </div>
                        </div>
                        <a className="swiper-button-prev"></a>
                        <a className="swiper-button-next"></a>
                    </div>

                    <div className="control">
                        <span className='a' onClick={this.swiperZoomIn}><Icon type="zoom-in" /></span>
                        <span className='a' onClick={this.swiperZoomOut}><Icon type="zoom-out" /></span>
                        <span className='a' onClick={this.swiperRotate}><Icon type="undo" /></span>
                    </div>
                </div>
            </Modal>
        )
    }
}