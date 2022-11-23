<script setup>
import { onMounted } from 'vue'
import app from './plugins/firebase'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';

const db = getFirestore(app);

// get nested colletion
const getNestedCollection = async (collectionName, docId, nestedCollectionName) => {
    const docRef = doc(db, collectionName, docId);
    const nestedCollectionRef = collection(docRef, nestedCollectionName);
    const nestedCollectionSnapshot = await getDocs(nestedCollectionRef);
    const nestedCollection = nestedCollectionSnapshot.docs.map(doc => doc.data());
    return nestedCollection;
}
onMounted(async () => {
    const employee = collection(db, 'employee');
    const employeeSnapshot = await getDocs(employee);
    const employeeList = employeeSnapshot.docs.map(doc => doc.data());
    console.log(employeeList);

    const employeeNestedCollection = await getNestedCollection('employee', 'rkhFHUw6ZpdyStZawL8h1QC9wyX2', 'presence');

    console.log(employeeNestedCollection);
})


</script>


<template>
    <div>{{ usersList }}</div>
</template>
