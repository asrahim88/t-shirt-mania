import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

function CustomLink({ children, to, }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none", }}
                to={to}
            >
                {children}
            </Link>
            <span className='ml-1 block w-full text-center'>
                {match && "(active)"}
            </span>
        </div>
    );
}

export default CustomLink;