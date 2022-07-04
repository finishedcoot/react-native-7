import * as SQLite from "expo-sqlite";

const dataBase = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function inertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    dataBase.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, lat, lng) VALUES (?,?,?,?)`,
        [place.title, place.imageUri, place.location.lat, place.location.lng],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, errorr) => {
          reject(errorr);
        }
      );
    });
  });

  return promise;
}
