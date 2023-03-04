import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
    toast.warning('Page not Found!')
    return (
        <Wrapper className='full-page'>

            <div>
                <img src={img} alt="error" />
                <h4>Page Not Found</h4>
                <Button>
                    <Link to='/' className='back'>Back </Link>
                </Button>
            </div>
        </Wrapper>
    )
}

const Button = styled.div`
.back{
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    position: absolute;
    font-weight:500;
    width: 50px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
.back:hover{
    background-color: #fff;
    color: #000;
    font-weight:400;
    border: 1px solid #000;
    transition: ease-out 400ms; 
}
`

export default Error