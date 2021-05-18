import React, { PureComponent } from 'react';
import Banner from '../components/sections/Banner';
import CardsContainer from '../components/CardsContainer';

import { Popover, OverlayTrigger } from 'react-bootstrap';
import { NavLink, Link  } from 'react-router-dom';
import SecondCard from '../components/SecondCard';
import SectionImageRight from '../components/sections/SectionImageRight';
import { Button } from 'react-bootstrap';
import SectionImageLeft from '../components/sections/SectionImageRight';
import { Element } from 'react-scroll';
import { IoArrowUpOutline } from 'react-icons/io5'
import {IoArrowForward} from 'react-icons/io5';
import BottomBanner from '../components/sections/BottomBanner';

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            img: 'banner_img'
        };
    }
    openModal = () => this.setState({isOpen: true});
    closeModal = () => this.setState({isOpen: false});
    handleSubmit = (e) => {
        e.preventDefault();
    }

    setAcademiesProps = () => {
        this.setState({
            title: "Едукација",
            img: "edukacija1",

        })
    };

    // setCompaniesProps = () => {
    //     this.setState({
    //         title:"Компании",
    //         img:"banner_img",
    //         content: 'Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија.'+

    //         'Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building?'+
            
    //         'Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи, адаптира и сподели својата експертиза со денешните потреби на компаниите.'
    //     })
    // }



    render() {
        const popover = (
            <Popover>
                <Popover.Content>
                    <strong>
                        Местата се распродадени
                    </strong>
                </Popover.Content>
            </Popover>);
        return (
            <div className="HomePage">
                <Banner title="Центар за Учење, Кариера и Иновација" />
                <div className='main'>
                    <div className="container-fluid">

                        <CardsContainer title='За Нас'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
                                    {/* <NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                                    <SecondCard img="edukacija1" title="Едукација" />
                                    {/* </NavLink>  */}
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                                    {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                                    < SecondCard img='nastani' title="Настани" />
                                    {/* </NavLink> */}
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                                    {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                                    < SecondCard img='coworking' title="Coworking" />
                                    {/* </NavLink> */}
                                </div>

                            </div>

                            <div className='row mt-4 '>
                                < div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                                    {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                                    < SecondCard img='prostor za nastani' title="Простор за настани" />
                                     {/* </NavLink> */}
                                 </div>

                                < div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                                    {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                                    < SecondCard img='partnerstva so tech komp' title="Патнерства со tech компании" />
                                    {/* </NavLink> */}
                                </div>

                                < div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                                    {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                                    < SecondCard img='inovacii za komp' title="Иновации за компании" />
                                    {/* </NavLink> */}
                                </div>


                            </div>


                        </CardsContainer>

                        <SectionImageRight title='ЕДУКАЦИЈА' >
                            <p>Дали се подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.</p>
                            <Button className='black-btn mb-md-2 mb-sm-2 p-2 primaryon' onClick={this.setAcademiesProps}>АКАДЕМИИ</Button>
                            <Button className='yellow-btn btn-primary' onClick={this.setAcademiesProps}>ЗА КОМАПНИИ</Button>

                        </SectionImageRight>

                        <CardsContainer title='НАСТАНИ'>
                            <div className='row mb-5'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
                                    <SecondCard img='Codeworks' title='Codeworks' />
                                </div>

                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <SecondCard img='instruktori' title='Deep Dive Into Marketing' />
                                </div>

                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <SecondCard img='DDIDS' title='Codeworks' />
                                </div>

                            </div>


                            </CardsContainer>

                 <div className='flex-row align-items-start'>
                        <Element id="#coworking" name="#coworking">
                            <SectionImageLeft title="Coworking" image="#coworking" variant='left' content="Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ке одлучи секој месец со кого да ги дели своите канцеларии.">
                                <OverlayTrigger trigger="click" placement="bottom"
                                    overlay={popover}>
                                    <button className="black-button mr-2 p-2 text-linetrough btn-linetrough mb-md-2 mb-sm-2 mb-2">РЕЗЕРВИРАЈ МЕСТО</button>
                                </OverlayTrigger>
                            </SectionImageLeft>
                         </Element>
                         </div>

                        <SectionImageRight img='prostor_za_nastani '  title="ПРОСТОР ЗА НАСТАНИ" content='Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира го нашиот Brainster Space'>
                          
                            <Button className='black-btn mb-md-2 mb-sm-2 p-2 primaryon' onClick={this.setAcademiesProps}>АКАДЕМИИ</Button>
                        </SectionImageRight>

<BottomBanner title="Партнери" content="Имаш идеја? Отворени сме за соработка">
<button variant ='black-button p-5 mt-5'>ВИДИ ГО ПРОСТОРОТ</button>
</BottomBanner>

                    </div>
                </div>
            </div>
        );
    }
};

export default HomePage;