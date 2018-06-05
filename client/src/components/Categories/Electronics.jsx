import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { timer } from "../../utils/timer";

class Electronics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainData: []
        }
    }

    componentDidMount() {
        this.getProduct();
    }

    componentDidUpdate() {
        timer();
    }

    getProduct() {
        fetch("/auction/getAuctionSession/Electronics", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then((json) => {
            //console.log(json);
            this.setState({ mainData: json });
          });
    }

    render() {
        const divStyle = {
            paddingTop: '56px',
            background: '#eff6fa',
            paddingBottom: '50px',
        }

        const gridStyle = {
            display: 'grid',
            grid: 'auto / auto auto auto',
            gridGap: '10px',
        }
        
        const arr = this.state.mainData;

        return (
            <div className="box_shadow" style={divStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabbed_container">
                                <div className="clearfix padding">
                                    <div className="new_arrivals_title">Đồ điện tử</div>
                                    <div className="tabs_line demo"><span></span></div>
                                </div>

                                <div style={gridStyle}>
                                    {
                                        arr.map((item, index) =>
                                            <div className="bestsellers_item">
                                                <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                    <div className="bestsellers_image"><img src={item.productImage} alt="" /></div>
                                                    <div className="bestsellers_content">
                                                        <div className="bestsellers_category"><a href="#">{item.productType}</a></div>
                                                        <div className="bestsellers_name"><a href="#">Item {index}</a></div>
                                                        <div className="bestsellers_price">{item.p[0].initPrice} VND</div>
                                                        <div className="deals_timer_content ml-auto">
                                                            <div className="deals_timer_box clearfix" data-target-time={item.p[0].bidTime}>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer1_hr" className="deals_timer_hr"></div>
                                                                    <span>hours</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer1_min" className="deals_timer_min"></div>
                                                                    <span>mins</span>
                                                                </div>
                                                                <div className="deals_timer_unit">
                                                                    <div id="deals_timer1_sec" className="deals_timer_sec"></div>
                                                                    <span>secs</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bid_btn">
                                                            <NavLink to={'Auction/' + item.productType + '/' + item.productID}>Đấu giá ngay</NavLink>
                                                            {/* <a href="javascript:void(0)"></a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Electronics;