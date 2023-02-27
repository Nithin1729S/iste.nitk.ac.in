import React, { Component } from 'react'
import styled from 'styled-components'
import ImageDisplay from './ImageDisplay'
import teamData from './constants/teamData'
import sheLogo from './constants/she_logo.jpeg'

export class SHE extends Component {
    state = {
        showMore: false
    }
    componentDidMount() {
        this.props.changeFooterVal("she");
    }
    
    render() {
        return (
            <>
                <br></br>
                <Header>
                    <img src={sheLogo} alt="SHE Logo" />
                </Header>
                <br></br><br></br><br></br><br></br><br></br>

                <div className="container">
                    <SectionContainer>
                        <SectionHeader>Our Mission</SectionHeader>
                        <div>
                            <ListContainer>
                                <ul>
                                    <li>To unite and create a community that provides opportunities for women in ISTE, NITK and encourage them to achieve their goals.</li>
                                    <li>To create a safe space within the club and ensure equality among both male and female students.</li>
                                    <li>Act as role models for young girls by setting examples, helping one another, and leading the change.</li>
                                </ul>
                            </ListContainer>
                        </div>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionHeader>Our Vision</SectionHeader>
                        <div>

                            <p>
                                To be a community that empowers women to develop their technical abilities to their fullest potential and equip them to excel as leaders.
                            </p>
                        </div>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionHeader>What is SHE?</SectionHeader>
                        <div>
                            The Society for Her Empowerment (SHE) is a women's group that focuses on helping female
                            students in ISTE NITK advance in their careers in engineering, business, and everything beyond. This group is dedicated to empowering women and providing them with the tools and resources they need to succeed in any environment. Through a plethora of events, we aim to create valuable and career-defining milestones for women and support their cause in pursuing a career of their choice.
                            {!this.state.showMore ? <ShowMore data-inline="true" onClick={() => this.setState({ showMore: true })}>Show More</ShowMore> :
                                <>
                                    <p>
                                        Using treasured skills and network obtained through this platform, we aim to enhance women’s creative and technical minds to the best for the society. These connections can be invaluable for members as they navigate their careers in tech, and can provide valuable guidance and support as they progress in their careers.

                                        Along with being an abode for professional development, SHE also provides a supportive community for its members. The group offers a safe and inclusive space for women in ISTE to connect with one another, share their experiences, and offer support and guidance to one another. SHE is an irreplaceable resource for women in ISTE NITK who are interested in pursuing careers in technology and beyond. By providing support, resources, and community to its members, this group is committed to helping women succeed and advance in their careers.
                                    </p>
                                    <ShowMore data-inline="true" onClick={() => this.setState({ showMore: false })}>Show Less</ShowMore>
                                </>
                            }
                        </div>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionHeader>Why SHE?</SectionHeader>
                        <div>

                            <p>
                                Let's look very briefly at the statistics on women in the technology oriented industries.
                                This industry has long been a male dominated world, but as we enter a new decade it is
                                time to revisit the position of women in technology. <br />
                                Results from global reports on the state of play for women in technology show that,
                            </p>
                            <ListContainer>
                                <ul>
                                    <li>Women make up an estimated 26% of workers in Data and Artificial Intelligence roles, 15% of workers in Engineering roles and 12% of workers in Cloud Computing roles.</li>
                                    <li>Only 34% of STEM graduates are women</li>
                                    <li>93% of capital invested in tech companies went to all male founding teams.</li>
                                </ul>
                            </ListContainer>
                            <p>
                                Our motto <b>'Empowering Women, Engineering the Future'</b> is aptly put forward for women to seek inspiration and prepare you specifically for professional practice and future leadership roles.
                            </p>
                        </div>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionHeader>Our Events</SectionHeader>
                        <div>
                            <p>
                                SHE aims to host a variety of events and activities throughout the year, including guest lectures from successful female engineers, workshops on resume building and interview skills, events focused on topics such as coding, data science and networking opportunities with alumni that support the advancement of women in engineering.
                            </p>
                        </div>
                    </SectionContainer>
                    <SectionOneLiner>
                        SHE’s core values are <span>Inclusion, Integrity, Teamwork, Respect, and Dedication.</span>
                    </SectionOneLiner>
                    <section>
                        <SectionHeader>The Team </SectionHeader>
                        <ImageDisplay data={teamData} />
                    </section>
                </div>
            </>
        )
    }
}

export default SHE

const Header = styled.div`
    img{
        max-width :70%;
        max-height :70%;
        display : block;
        margin : auto;
    }
`;

const ShowMore = styled.button`
    display : inline !important;
    background: none;
	cursor : pointer;
    color: #EA1B91;
	border: none;
	padding: 0;
	font: inherit;
	outline: inherit;
`

const SectionHeader = styled.h2`
    font-family: 'PannaCotta', cursive;
    text-transform: capitalize !important;
    color : #EA1B91;
`;


const ListContainer = styled.div`
    margin : 0 0 0 5px;
    border : none !important;
    padding : 0 !important;
    ul {
        list-style: none;
    }
    ul li::before {
        content : "♡ " ;
        color : #EA1B91;
    }
`;

const SectionOneLiner = styled.section`
    font-weight : 600;
    font-family: 'PannaCotta', cursive;
    text-align: center;
    font-size: 32px;
    padding: 16px;
    @media screen and (max-width:750px) {
        font-size: 24px;
    }
    span {
        color : #EA1B91;
        font-family: 'PannaCotta', cursive;
    }
`;




const SectionContainer = styled.section`
    display:grid ;
    min-width: 90%;
    padding: 0 16px;
    grid-template-columns: 2fr 5fr;
    align-items: center;
    border:2px solid #EA1B91 ;
    margin: 16px ;
    background-color: #fff;
    box-shadow: 0px 0px 18px 7px #e1e3ff8a;
    h2{
        text-transform: uppercase;
        font-size:48px;
    }
    div{
        font-size: 18px;
        margin-left: 16px;
        padding: 24px;
        p{
            text-align: justify;
        }
        border-left: 2px solid #EA1B91;
    }
    @media screen and (max-width:750px) {
        grid-template-columns: 1fr;
        div{
        font-size: 16px;
        margin-left: 0px;
        border: none;
    }

    }
`;
