import Navbar from './Navbar';
import Fader from './Fader';
import styled,{keyframes} from 'styled-components'; 
import Footer from './Footer';

const morph = keyframes`
  0%{border-radius:5px;}
  50%{border-radius:50px;}
  100%{border-radius:5px;}
`;

const spin = keyframes`
  from{transform:rotate(0deg);}
  to{transform:rotate(360deg);}
`;

const Ball = styled.div`
  background-color: black;
  width: 50px;
  height:50px;
  margin: 0 auto;
  border-radius: 50%;
  animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite;
`;



const Home = () =>{
  return(
  <div>
  <div className="head">
  <Navbar/>
  </div>
  <div className="sec">
  <img src="backgroundd.jpg" alt="background"/>
  </div>
<div className="fadee">
    <Fader/>
   </div>
   <div className="two-divs">
   <div className="winner">
   <img src="dayo1.png" alt="dayo"/>
   <h2> Winner Of The Big Break Moment Africa Graduate From Del York Creative Academy </h2>
   <p>Two winners from the just concluded biggest reality show for talented youths across Africa “The Big Break Moment Reality Experience, 2022” have graduated from the prestigious Del York Creative Academy.</p>
   <button className="btn">
   <a href="https://tlm.ng/winners-of-the-big-break-moment-africa-graduate-from-del-york-creative-academy/">Read more</a>
   </button>

   </div>

   <div className="unn">
   <img src="joelround.jpg" alt="joel"/>
   <h2>UNN Student Wins 30 Million Naira Star Prize At Big Break Moment africa 2022</h2>
   <p> At the Big Break Moment Africa grand finale, which held at the prestigious Eko Hotels and Suites in Lagos, Jones, a professional dancer, was awarded 30 million naira worth of cash and prizes.</p>
   <button className="btn">
   <a href="https://leadership.ng/unn-student-wins-n30m-star-prize-at-big-break-moment-africa-2022/">Read more</a>
   </button>

   </div>

</div>
<div className="finalists-head">
<h1>TOP 3 FINALISTS</h1>
</div>
<div className="finalists">
<div className="column">
<h1>Joel Jones(winner)</h1>
<img src="joeluzor.jpg" alt="joel"/>
</div>
<div className="column">
<h1>Victor rhymes(runner up)</h1>
<img src="vicfinalist.jpg" alt="victor"/>
</div>
<div className="column">
<h1>Dionne(runner up)</h1>
<img src="dionne.jpg" alt="dionne"/>
</div>
</div>
<Footer/>
</div>

  );
}

export default Home;
