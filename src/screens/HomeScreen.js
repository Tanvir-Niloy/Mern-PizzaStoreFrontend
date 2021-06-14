import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Pizza from '../components/Pizza';
import pizzas from '../pizzasdata';
import {getAllPizzas} from '../actions/PizzaActions'

export default function HomeScreen() {

  const dispatch = useDispatch();

  const pizzasstate = useSelector(state=>state.getAllPizzasReducer);
  const {pizzas,loading,error} = pizzasstate

  useEffect(() => {
    
    dispatch(getAllPizzas())

  }, []);


          return (
                    <div>
                        <div className="row justify-content-center">
                          {loading ? (<h1>Loading....</h1>):error ?(<h1>Something Went Worng</h1>):(

                            pizzas.map(pizza=>{

                              return(

                                <div className="col-md-3 m-3" key={pizza._id}>
                                  <div>
                                      <Pizza pizza={pizza}/>      
                                  </div>
                                </div>
                              )
                              
                            })  
                                                          
                          )}

                           
                       </div>  
                    </div>
          )
}
