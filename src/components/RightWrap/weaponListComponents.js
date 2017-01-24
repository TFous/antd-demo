import React, {Component}from 'react';
import style from '../../assets/index.css';


class weaponListComponents extends Component {
    constructor(props) {
        super(props);
    }

    handleImg(dom, w, h) {
        const Img = dom;
        Img.onload = function () {
            function setImgSize(dom, w, h) {
                if (Img.offsetWidth > w) {
                    Img.width = w;
                    if (Img.offsetHeight > h) {
                        w -= 5;
                        setImgSize(dom, w, h);
                    }
                }
            }

            setImgSize(dom, w, h)
        }
    }

    componentDidMount() {
        Object.keys(this.refs).forEach(key => this.handleImg(this.refs[key], 220, 140))
    }

    componentDidUpdate() {
        Object.keys(this.refs).forEach(key => this.handleImg(this.refs[key], 220, 140))
    }

    render() {
        const clickHandler = (e) => {
            const {getWid} = this.props;
            getWid(e)
        };

        const {weaponList, weaponClass} = this.props.record.arms;
        const weaponItems = weaponList.map(function (item, i) {
            {
                return (
                    <li key={item.wid} className={style.explainBox} onClick={clickHandler.bind(null, item.wid)}>
                        <img ref={item.wid} className={style.w_img}
                             src={"http://cdn1.zygames.com/qqsm/t1/weapon/" + item.wid + ".png"} alt=""/>
                        <p className={style.wname}>{item.title}</p>
                    </li>
                )
            }
        });

        return (
            <div>
                <div className={style.w_r}>
                    <h3 className={style.w_class_tit}>{weaponClass}</h3>
                    <ul className={style.w_class_ul}>
                        {weaponItems}
                    </ul>
                </div>
                <div className={style.clearfix}></div>
                <div className={style.bottom_wrap}></div>
            </div>
        )
    }


}

export default weaponListComponents;

