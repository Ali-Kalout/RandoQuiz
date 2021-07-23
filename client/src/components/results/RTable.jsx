import React from 'react';

const RTable = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Question</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {data?.questions?.map((q, i) => (
                        <tr key={i}>
                            <td>{Number(i) + 1}</td>
                            <td>{q?.question}</td>
                            <td>{(data?.results[i]?.status?.charAt(0).toUpperCase() + data?.results[i]?.status?.slice(1)).substring(0,100)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RTable;