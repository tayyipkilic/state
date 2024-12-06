import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'
import './course.css'

const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    Kompleweb,
}


function Course({courseName}) {
    // console.log(Angular)
    // console.log(courseName)
    console.log(courseMap[courseName]);
    return ( 
        <div className='courseDiv'>
            <img className='course' src={courseMap[courseName]}/>
            
        </div>
    
    )

}

export default Course;