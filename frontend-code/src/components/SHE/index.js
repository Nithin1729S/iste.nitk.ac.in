import React, { Component } from 'react'
import styled from 'styled-components'
import ImageDisplay from './ImageDisplay'
import teamData from './constants/teamData'

export class SHE extends Component {
  render() {
    return (
        <>
            <div className="container">
                <Header>Society for Her Empowerment(SHE)</Header>    
                <section>
                    <h2>What is SHE?</h2>
                    <p>
                        The Society for Her Empowerment (SHE) is a women's group that focuses on helping female
                        students in ISTE NITK advance in their careers in engineering, business, and everything beyond. This group is dedicated to empowering women and providing them with the tools and resources they need to succeed in any environment. Through a plethora of events, we aim to create valuable and career-defining milestones for women and support their cause in pursuing a career of their choice. Using treasured skills and network obtained through this platform, we aim to enhance women’s creative and technical minds to the best for the society. These connections can be invaluable for members as they navigate their careers in tech, and can provide valuable guidance and support as they progress in their careers. 
                    </p>
                    <p>
                        Along with being an abode for professional development, SHE also provides a supportive community for its members. The group offers a safe and inclusive space for women in ISTE to connect with one another, share their experiences, and offer support and guidance to one another. SHE is an irreplaceable resource for women in ISTE NITK who are interested in pursuing careers in technology and beyond. By providing support, resources, and community to its members, this group is committed to helping women succeed and advance in their careers.
                    </p>
                </section>
                <section>
                    <h2>Why SHE?</h2>
                    <p>
                        Let's look very briefly at the statistics on women in the technology oriented industries.
                        This industry has long been a male dominated world, but as we enter a new decade it is
                        time to revisit the position of women in technology. <br/>
                        Results from global reports on the state of play for women in technology show that,
                    </p>
                    <ul>
                        <li style={{ listStyleType: 'disc' }}>Women make up an estimated 26% of workers in Data and Artificial Intelligence roles, 15% of workers in Engineering roles and 12% of workers in Cloud Computing roles.</li>
                        <li style={{ listStyleType: 'disc' }}>Only 34% of STEM graduates are women</li>
                        <li style={{ listStyleType: 'disc' }}>93% of capital invested in tech companies went to all male founding teams.</li>
                    </ul>
                    
                    <p>
                        Our motto <b>‘Lead the Change’</b> is aptly put forward for women to seek inspiration and prepare you specifically for professional practice and future leadership roles. 
                    </p>
                </section>
                <section>
                    <h2>Our Vision</h2>
                    <p>
                        To be a community that empowers women to develop their technical abilities to their fullest potential and equip them to excel as leaders.
                    </p>
                </section>
                <section>
                    <h2>Our Mission</h2>
                    <ul>
                        <li style={{ listStyleType: 'disc' }}>To unite and create a community that provides opportunities for women in ISTE, NITK and encourage them to achieve their goals.</li>
                        <li style={{ listStyleType: 'disc' }}>To create a safe space within the club and ensure equality among both male and female students.</li>
                        <li style={{ listStyleType: 'disc' }}>Act as role models for young girls by setting examples, helping one another, and leading the change.</li>
                    </ul>
                </section>
                <section>
                    SHE’s core values are Inclusion, Integrity, Teamwork, Respect, and Dedication.
                </section>
                <section>
                    <h2>The Team </h2>
                    <ImageDisplay data={teamData} />
                </section>
            </div>
        </>
    )
  }
}

export default SHE


const Header = styled.h1`
    font-family: 'Dancing Script', cursive;
`
