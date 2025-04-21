import React from 'react'
import Container from '../../Common/Container/Container';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Common/Button/Button';

const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' }
];

const Navbar = () => {
    const { user, handleLogout } = useAuth();

    if (!user) return null;

    return (
        <>
            <Container className='py-8 sticky top-0 z-50 backdrop-blur-3xl'>
                <div className='grid grid-cols-3 w-full'>
                    <div className='flex w-fit list-none gap-8 items-center justify-between text-neutral-500 dark:text-neutral-400'>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => isActive ? 'text-lime-400' : ''}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div>
                            <img src="/vite.svg" alt="Logo" />
                        </div>
                        <p>Hi, <b className='text-lime-400'>{user.username}</b></p>
                    </div>
                    <div className='flex justify-end'>
                        <Button
                            size='sm'
                            // variant='secondary'
                            onClick={handleLogout} >
                            Logout
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Navbar