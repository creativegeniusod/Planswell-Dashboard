import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';
class DashboardProtector6 extends React.Component {
  render() {
        return (
        		<div>
	        		<div className="box no-padding message-col dashboard detialed-box"> 
		              	<article className="message no-margin">
				            <div className="message-header no-padding">
				              <div className="full-width">                    
				                	<ProtectTitle />
				                  <div className="col">
				                   <p className="no-margin heading">Put <strong>$114/month</strong> towards <strong>$700,000</strong> of insurance coverage.</p>
				                    <div className="is-danger swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet bold"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    </div>
				                    <p className="no-margin is-danger critical-text">Critical illness <i className="fa fa-question question-mark"></i></p>
				                     
				                    <h4 className="no-margin pt-0 pb-10">We've submitted your critical illness application for review.</h4>
				                    <p className="no-margin"><a onClick={this.props.protecttab} ><i className="fa fa-clock-o is-danger"></i></a> We should hear back from your provider in 1-2 weeks with any feedback.</p>
				                  </div>
				              </div>
				            </div>
				        </article>
		            </div>
		            <div className="box no-padding message-col dashboard detialed-box"> 
		              	<article className="message no-margin">
				            <div className="message-header no-padding">
				              <div className="full-width"> 
				                  <div className="col">
				                    <p className="no-margin is-danger critical-text">Disability <i className="fa fa-question question-mark"></i></p>
				                     
				                    <h4 className="no-margin pt-0 pb-10">Your disability insurance your policy is ready to review and sign.</h4>
				                  </div>
				              </div>
				            </div>
				        </article>
				        <div className="col btn-sec pt-10 pb-10">
	                  		<a className="button is-danger" onClick={this.props.protecttab}>Review and sign policy</a>
	                  	</div>
		            </div>
		        </div> 
        );
    }
  
}

export default DashboardProtector6;
