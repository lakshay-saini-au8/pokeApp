import React from 'react'
import {connect} from 'react-redux'
import Card from '../component/Card'
import {Main} from './Home.style'

const Home = ({allPoke,allPokeFetch}) => {
    return (
            <Main>
               {allPokeFetch?"Loading":allPoke.results.map((item,index)=>(
                   <Card key = {index} cardData = {item} cardNo = {index+1} />
               ))}
            </Main>

    )
}
const mapStateToProps = (state) => ({

    allPoke:state.allPokemonState.data,
    allPokeFetch:state.allPokemonState.fetching
    
})


export default connect(mapStateToProps)(Home)
