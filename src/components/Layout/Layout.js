import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.css';

const Layout =  ( props ) => (
    <Aux>
        <div>Toolbar SideDrawer Backrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;
