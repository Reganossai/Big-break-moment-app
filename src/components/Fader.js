import react,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
const Fader = ({text}) =>{
	
const [fadeProp,setFadeProp]= useState({
	fade:'fade-in',

});

useEffect(()=>{
	const timeout = setInterval(()=>{
if (fadeProp.fade === 'fade-in'){
	setFadeProp({
	fade:'fade-out'
	})
}else {
	setFadeProp({
	fade:'fade-in'
	})
}
	},4000);
	return ()=>{}
},[fadeProp]);

	return (
<div>
  <h1 className={fadeProp.fade}>{text}</h1>
</div>
	);

}
Fader.defaultProps={
	text:'Do you have what it takes?'
}
Fader.propTypes={
	text:PropTypes.string,
}

export default Fader;