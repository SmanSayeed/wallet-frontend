import React from 'react';

const DenominationList = ({ denominationsData, handleRemoveDenomination, currencySymbol,userData,walletData,handleAddToDeposit }) => {
    return (
        <div>
            <h4 className="mt-1 mb-3">Added Denominations in {userData?.name}'s  {walletData?.name}</h4>
            {denominationsData?.data && denominationsData.data.length > 0 ? (
                <ul className="list-group">
                    {denominationsData.data.map((denom,index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">                         <strong>{index+1}#{denom.pivot_id}</strong>
                            <span>{denom?.title}({denom?.amount} {currencySymbol}) - Amount: {denom?.pivot?.amount}</span>

                            <div className='d-flex gap-2'>
       

                            <button
                                type="button"
                                className="btn btn-success btn-sm"
                                onClick={() => handleAddToDeposit(denom)}
                            >
                                Deposit
                            </button>


                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleRemoveDenomination(denom.pivot_id)}
                            >
                                Remove
                            </button>
                            </div>
                          
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No denominations added.</p>
            )}
        </div>
    );
};

export default DenominationList;