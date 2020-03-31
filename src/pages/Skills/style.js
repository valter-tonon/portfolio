import styled from 'styled-components'

export const SkillWrapper = styled.section ` 
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width:100%;
    height: 100%;
    color: #fff;
    overflow: hidden;
`
export const Div = styled.div ` 
    display: flex;
    
    flex-direction:column;
    width: 300px;
    height: 300px;
    border:1px solid #999;
    margin: 5px;
    transition: transform 0.5s;
    border-radius:4px;

    &:hover{
        transform: scale(1.1);
 }
    
    img{
        width: 100px;
        height: 100px;
    }
    h2{
        padding: 20px;
    }

    h1,h2,h3,p{
        margin-top:20px;
        text-align: center;
      
    }

    
    .CircularProgressbar {
  /*
   * This fixes an issue where the CircularProgressbar svg has
   * 0 width inside a "display: flex" container, and thus not visible.
   */
  width: 100px;
  margin: 30px 10px 0 180px;
  /*
   * This fixes a centering issue with CircularProgressbarWithChildren:
   * https://github.com/kevinsqi/react-circular-progressbar/issues/94
   */
  vertical-align: middle;
}

.CircularProgressbar .CircularProgressbar-path {
  stroke:  #F77B57;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease 0s;
}

.CircularProgressbar .CircularProgressbar-trail {
  stroke: rgba(0,0,0,0.2);
  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
  stroke-linecap: round;
}

.CircularProgressbar .CircularProgressbar-text {
  fill: #999;
  font-size: 20px;
  
  text-anchor: middle;
}

.CircularProgressbar .CircularProgressbar-background {
  fill: #d6d6d6;
}

/*
 * Sample background styles. Use these with e.g.:
 *
 *   <CircularProgressbar
 *     className="CircularProgressbar-inverted"
 *     background
 *     percentage={50}
 *   />
 */
.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
  fill: #3e98c7;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
  fill: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
  stroke: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
  stroke: transparent;
}
`