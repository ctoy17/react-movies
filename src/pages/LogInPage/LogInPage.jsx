import LogInForm from '../../components/LogInForm/LogInForm';
import './LogInPage.css';

export default function LogInPage({setUser}) {
    
    return (
        <main className='LogIn'>
            <div className='neon'>
                LETS GO <br/> TO THE MOVIES
            </div>
            <LogInForm setUser={setUser}/>
        </main>
    );
}