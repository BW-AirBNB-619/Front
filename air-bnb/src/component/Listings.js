import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth"

const initialListing = {
    location: '',
    guests: '',
    bedrooms: '',
    stay: '',
};

const Listings = ({ listings, updateListings }) => {
    const { push } = useHistory();
    const { id } = useParams();

    console.log(listings);
    const [editing, setEditing] = useState(false);
    const [listingToEdit, setListingToEdit] = useState(initialListing);
    const [formData, setFormData] = useState([]);

    const editListing = listing => {
        setEditing(true);
        setListingToEdit(listing);
    };

    console.log("listings ", listings);

    const saveEdit = id => {
        axiosWithAuth()
            .put(`http://localhost:5000/${listingToEdit}`, listingToEdit)
            .then(res => {
                updateListings(res.data)
                console.log("listing data ", res);
            })
            .catch(err => console.log(err));
    };

    const deleteListing = listing => {
        axiosWithAuth()
            .delete(`http://localhost:5000/${listing.id}`)
            .then(res => {
                console.log("delete data ", res)
                const listingId = res.data
                const newListings = listings.filter((listingSelected) => {
                    return listingSelected.id !== listingId
                });
                updateListings(newListings)
            })

    };

    const handleChanges = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const addListing = evt => {
        evt.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/", formData)
            .then(res => {
                console.log(res)
                updateListings(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="listings">
            <p>Your AirBnB Listings</p>
            <ul>
                {listings.map(listing => (
                    <li key={listing.listing} onClick={() => editListing(listing)}>
                        <span>
                            <span className="delete" onClick={e => {
                                e.stopPropagation();
                                deleteListing(listing)
                            }
                            }>
                                x
                        </span>{" "}
                            {listing.listing}
                        </span>
                    </li>
                ))}
            </ul>
            {editing && (
                <form onSubmit={() => saveEdit(listingToEdit.id)}>
                    <legend>Edit Listing</legend>
                    <label>
                        Listing Location:
                    <input
                            onChange={e =>
                                setListingToEdit({ ...listingToEdit, listing: e.target.value })
                            }
                            value={listingToEdit.location}
                        />
                    </label>
                    <label>
                        Bedrooms:
                    <input
                            onChange={e =>
                                setListingToEdit({ ...listingToEdit, bedrooms: e.target.value })
                            }
                            value={listingToEdit.bedrooms}
                        />
                    </label>
                    <div className="button-row">
                        <button type="submit">save</button>
                        <button onClick={() => setEditing(false)}>cancel</button>
                    </div>
                </form>
            )}
            <form onSubmit={addListing}>
                <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChanges}
                    placeholder="Add new name"
                />
                <input
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChanges}
                    placeholder="Add location"
                />
                <input
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChanges}
                    placeholder="Add bedrooms"
                />
                <button>
                    New Listing
                    </button>
            </form>
        </div>
    )
}

export default Listings;