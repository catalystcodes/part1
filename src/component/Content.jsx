const Part1 = ({part1, exercises1}) => {
	return (
		<div>
			<p>{part1} {exercises1}</p>
		</div>
	)
}

const Part2 = ({part2, exercises2}) => {
	return (
		<div>
			<p>{part2} {exercises2}</p>
		</div>
	)
}

const Part3 = ({part3, exercises3}) => {
	return (
		<div>
			<p>{part3} {exercises3}</p>
		</div>
	)
}

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) =>{	
	return (
		<div>
			<Part1 part1={part1} exercises1={exercises1}/>
			<Part2 part2={part2} exercises2={exercises2}/> 
			<Part3 part3={part3} exercises3={exercises3}/>
		</div>
	)
}

export default Content