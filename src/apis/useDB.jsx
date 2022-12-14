/*
DB 를 이용하려고 했던 api
그러나 잠정적으로 사용 안함.
import { db, firebase } from '../firebase';

const getDoc = async (colId, docId) => {
  try {
    const doc = await db.collection(colId).doc(docId).get()
    if(doc.exists) {
      return(doc.data());
    } else {
      console.log('해당 document 없음!');
    }
    console.log('get : good!');
  } catch(e) {
    alert('get : err!');
  }
}

const addDoc = async (colId, data) => {
  try {
    await db.collection(colId).add(data);
    console.log('add : good!');
  } catch(e) {
    alert('add : err!');
  }
}

const updateDoc = async (colId, docId, data) => {
	try {
		await db.collection(colId).doc(docId).update(data);
		console.log('update : good!');
	} catch(e) {
		alert('update : err!');
	}
}

const deleteDoc = async (colId, docId) => {
  try {
    await db.collection(colId).doc(docId).delete();
    console.log('delete document : good!');
  } catch(e) {
    alert('delete document : err!');
  }
};

const deleteField = async (colId, docId, fieldName) => {
  try {
    const data = {};
    data[fieldName] = firebase.firestore.FieldValue.delete();
    await db.collection(colId).doc(docId).update(data)
    console.log('delete field : good!')
  } catch(e) {
    alert('delete field : err!');
  }
}

export {getDoc, addDoc, updateDoc, deleteDoc, deleteField}*/