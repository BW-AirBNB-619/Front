import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import FormStyles from "./Styles/FormStyle";
import FormStyle from "./Styles/FormStyle";
import ListingStyle from "./Styles/ListingStyle";

const initialListing = {
  name: "",
  bedrooms: 0,
  neighbourhood: "",
  roomtype: "",
  minimumnights: 0,
  numberofreviews: 0,
  price: 0,
};

export const Listings = () => {
  const { push } = useHistory();
  const { propertyid } = useParams();

  const [editing, setEditing] = useState(false);
  const [listingToEdit, setListingToEdit] = useState(initialListing);
  const [formData, setFormData] = useState([]);
  const [Listing, setListing] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://ww-foundation.herokuapp.com/users/user/8")
      .then((res) => {
        console.log(res.data);
        setListing(res.data.userprops);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("-----> final", Listing);

  const editListing = (Listing) => {
    setEditing(true);
    setListingToEdit(Listing);
  };

  const saveEdit = (propertyid) => {
    axiosWithAuth()
      .patch(
        `https://ww-foundation.herokuapp.com/properties/property/${listingToEdit.propertyid}`,
        listingToEdit
      )
      .then((res) => {
        setListing(res.data);
        console.log("listing data ", res);
      })
      .catch((err) => console.log(err));
  };

  const deleteListing = (Listing) => {
    axiosWithAuth()
      .delete(
        `https://ww-foundation.herokuapp.com/properties/property/${Listing.propertyid}`
      )
      .then((res) => {
        console.log("delete data ", res);
        const listingId = res.data;
        const newListings = Listing.filter((ListingSelected) => {
          return ListingSelected.propertyid !== listingId;
        });
        setListing(newListings);
      });
  };

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addListing = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post(
        "https://ww-foundation.herokuapp.com/properties/user/8/property",
        formData
      )
      .then((res) => {
        console.log(res);
        setListing(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ListingStyle className="listings">
      <div className="titles-div">
        <h3>Your AirBnB Listings</h3>
        <h4>Click listing name to edit</h4>
      </div>

      <ul>
        {Listing.map((Listing) => (
          <li key={Listing.propertyid} onClick={() => editListing(Listing)}>
            <span className="listing-span">
              <h4>{Listing.name}</h4>
              <span
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteListing(Listing);
                }}
              >
                {" "}
                x{" "}
              </span>{" "}
            </span>
          </li>
        ))}
      </ul>
      {editing && (
        <form
          className="listing-details"
          onSubmit={() => saveEdit(listingToEdit.propertyid)}
        >
          <legend>Edit Listing</legend>
          <br />
          <label>
            Name:
            <input
              onChange={(e) =>
                setListingToEdit({ ...listingToEdit, name: e.target.value })
              }
              value={listingToEdit.name}
            />
          </label>

          <label>
            Bedrooms:
            <input
              onChange={(e) =>
                setListingToEdit({ ...listingToEdit, bedrooms: e.target.value })
              }
              value={listingToEdit.bedrooms}
            />
          </label>
          <label>
            Neighbourhood:
            <input
              onChange={(e) =>
                setListingToEdit({
                  ...listingToEdit,
                  neighbourhood: e.target.value,
                })
              }
              value={listingToEdit.neighbourhood}
            />
          </label>
          <label>
            RoomType:
            <input
              onChange={(e) =>
                setListingToEdit({ ...listingToEdit, roomtype: e.target.value })
              }
              value={listingToEdit.roomtype}
            />
          </label>
          <label>
            Minimum Nights:
            <input
              onChange={(e) =>
                setListingToEdit({
                  ...listingToEdit,
                  minimumnights: e.target.value,
                })
              }
              value={listingToEdit.minimumnights}
            />
          </label>
          <label>
            Number of reviews:
            <input
              onChange={(e) =>
                setListingToEdit({
                  ...listingToEdit,
                  numberofreviews: e.target.value,
                })
              }
              value={listingToEdit.numberofreviews}
            />
          </label>
          <label>
            Price:
            <input
              onChange={(e) =>
                setListingToEdit({ ...listingToEdit, price: e.target.value })
              }
              value={listingToEdit.price}
            />
          </label>
          <br />
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <br />
      <FormStyle onSubmit={addListing}>
        <legend>Add New Listing</legend>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChanges}
          placeholder="Name"
        />

        <input
          name="bedrooms"
          type="number"
          value={formData.bedrooms}
          onChange={handleChanges}
          placeholder="Bedrooms"
        />
        <input
          name="neighbourhood"
          type="text"
          value={formData.neighbourhood}
          onChange={handleChanges}
          placeholder="Neighbourhood"
        />
        <input
          name="roomtype"
          type="text"
          value={formData.roomtype}
          onChange={handleChanges}
          placeholder="Room Type"
        />
        <input
          name="minimumnights"
          type="number"
          value={formData.minimumnights}
          onChange={handleChanges}
          placeholder="Minimum Nights"
        />
        <input
          name="numberofreviews"
          type="number"
          value={formData.numberofreviews}
          onChange={handleChanges}
          placeholder="Number of reviews"
        />
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChanges}
          placeholder="Price"
        />
        <button>Add Listing</button>
      </FormStyle>
    </ListingStyle>
  );
};

// propertyid: "",
//     name: "",
//     bedrooms: '',
//     neighbourhood: "",
//     roomtype: "",
//     minimumnights: "",
//     numberofreviews: "",
//     price: ""
