import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';
class DashboardProtector9 extends React.Component {
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
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet bold"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    </div>
				                    <p className="no-margin is-danger">Critical illness:</p>
				                     
				                    <h4 className="no-margin">Your provider may need to schedule a nurse's visit with you</h4>
				                    <p className="no-margin"><a onClick={this.props.protecttab}><i className="fa fa-mobile is-danger"></i></a>You may hear from your provider in the next 2-3 days to schedule a nurse visit.</p>
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
				                    <p className="no-margin is-danger">Disability:</p>
				                     
				                    <h4 className="no-margin">Your disability insurance your policy is ready to review and sign.</h4>
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

export default DashboardProtector9;
