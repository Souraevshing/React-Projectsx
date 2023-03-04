import { Link } from 'react-router-dom';

import { Logo } from '../components/index';
import Wrapper from '../assets/wrappers/LandingPage'
import styled from 'styled-components';
import main from '../assets/images/main.svg';

const Landing = () => {

    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container-page">
                <div className="info">
                    <h1>JOB <span>Tracking</span></h1>
                    <p>
                        Get your dream job
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login Or Create an Account</Link>
                </div>
                <img src={main} alt="main" className='img main-img' />
            </div>
        </Wrapper>
    )
}

const Wrappers = styled.main`
nav{
    width:var(--fluid-width);
    max-width:var(--max-width);
    margin:0 auto;
    height:var(--nav-height);
    display:flex;
    align-items:center;
}
.page{
    min-height:calc(100vh-var(--nav-height));
    display:grid;
    align-items:center;
    margin-top:-3rem;
}
h1{
    font-weight:700;
    span{
        color:var(--primary-500);
    }
}
p{
    color:var(--grey-600);
}
.main-img{
    display:none;
}
@media (min-width:992px){
    .page{
        grid-template-columns:1fr 1fr;
        column-gap:3rem;
    }
    .main-img{
    display:block;
    }
}
`

export default Landing