import PlaceForm from "../components/Places/PlaceForm";

const Addplace = ({ navigation }) => {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default Addplace;
