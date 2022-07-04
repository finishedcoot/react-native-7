export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    // this.address = address;
    this.location = { lat: location.lat, lng: location.lng }; //{lat:312313.51 , lng:0.1254}
    this.id = new Date().toISOString() + Math.random().toString();
  }
}
