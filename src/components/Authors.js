import React from 'react';

const Authors = ({ authors }) => {
	return <span>{authors.map((author) => author.name)}</span>;
};

export default Authors;
