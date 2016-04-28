import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <img src={require('./logo.png')} className={s.logo} />
        {/*
        <form name="go_signin" id={s.go_signin} action="/auth/google" method="post"><input className={s.submit} type="submit" defaultValue="Sign in with your Nearsoft account" /><input type="hidden" name="scope" defaultValue="profile email" /></form>
        */}
        <Navigation />
      </div>
    </header>
  );
}

export default withStyles(s)(Header);
