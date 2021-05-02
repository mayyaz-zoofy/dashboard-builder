import React from 'react';
import Theme from "./Theme";
import Header from "./Header";
import Footer from "./Footer";

export default function DashboardLayout(props) {
    const { children, theme, data } = props;

    const renderHeader = () => {
        if (data.content.header) {
            return <Header { ...data.content.header } />
        }
    }

    const renderFooter = () => {
        if (data.content.footer) {
            return <Footer { ...data.content.footer } />
        }
    }

    if (theme) {
        return (
            <Theme theme={theme}>
                {renderHeader()}
                {children}
                {renderFooter()}
            </Theme>
        );
    }

    return <>{children}</>
}