import React from 'react';
import { Container } from 'react-bootstrap';
import { Heading2 } from '../../../../components';
import { InfoCard } from '../../components';
import './OngoingCampaigns.scss';
import Slider from "react-slick";

function OngoingCampaigns(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    //     {
    //       breakpoint: 900,
    //       settings: {
    //         slidesToShow: 3,
    //       }
    //     },
    //     {
    //       breakpoint: 550,
    //       settings: {
    //         slidesToShow: 2,
    //       }
    //     },
    //   ]
  };

    return (
      <Container className="ongoingCampaigns" fluid>
        <Heading2 first="Ongoing Campaigns"/>
        {/* <InfoCard></InfoCard> */}
        <Slider {...settings}>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
          <div>
          <InfoCard></InfoCard>
          </div>
        </Slider>
        
        {/* <div className="ongoingCampaigns">
            
            <Heading2 first="Ongoing Campaigns"/>
            <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
  <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
  <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    
  </ol>
  <div class="carousel-inner" role="listbox">

    <div class="carousel-item active">

      <div class="col-md-3" style={{float:'left'}}>
       <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title 1</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float:'left'}}>
        <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title 2</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float:'left'}}>
        <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title 3</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
      
       <div class="col-md-3" style={{float:'left'}}>
       <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

    </div>

    <div class="carousel-item">

      <div class="col-md-3" style={{float:'left'}}>
        <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float:'left'}}>
        <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-3" style={{float:'left'}}>
        <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-3" style={{float:'left'}}>
        <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

    </div>

   

  </div>

</div>

        </div> */}
      </Container>
    );
}

export default OngoingCampaigns;