import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
display: flex ;
justify-content: space-between;
flex-direction: row;
height: 600px;
margin: 0 auto;
box-sizing: border-box;
background-color: #7CA47F;
`
const ContentItem = styled.p `
color: #000;
text-align: center;
font-family: 'Read';
width: 400px;
height: 300px;
background-color: #C1F7C5; 
padding: 10px;
box-sizing: border-box;
margin: 40px;
`

export default function content() {
    return(
        <React.Fragment>
            <Content>
                <ContentItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel commodo velit. Aliquam sed orci sed metus accumsan malesuada. Cras luctus porttitor velit, sit amet egestas diam cursus eget. Nam sed placerat lacus. In venenatis dolor eu bibendum sollicitudin. Pellentesque ac varius erat, vitae varius tellus. Praesent et molestie quam. Praesent sit amet elit feugiat neque convallis condimentum ac lacinia augue. Sed a dignissim augue, in rutrum lorem.
                </ContentItem>
                <ContentItem>
                Nam quis turpis pharetra, efficitur sapien vitae, lacinia mauris. Fusce pulvinar efficitur condimentum. Nullam vitae dui hendrerit tortor porta suscipit. Sed placerat sapien quis lacus consectetur, id feugiat odio cursus. Maecenas id lobortis urna. Phasellus porta tortor leo, eu interdum elit condimentum a. Aliquam ut aliquet urna. Donec id tellus tortor. Nullam luctus sit amet sem non mollis. Phasellus at commodo velit. Sed id viverra enim. Vivamus tempor varius magna, feugiat commodo enim dictum nec. Phasellus commodo vulputate lacus, nec volutpat diam semper in. Pellentesque ante nisl, vestibulum in posuere nec, hendrerit sit amet arcu. Curabitur a odio et libero semper sagittis. Nulla enim metus, ornare vel lorem vitae, pretium finibus purus.
                </ContentItem>
            </Content>
        </React.Fragment>
    );
}