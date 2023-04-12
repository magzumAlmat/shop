export const createProductAction = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('products').add({
            ...product,
            authorFirstName: profile.firstName || '',
            authorLastName: profile.lastName|| '',
            authorId: authorId || '',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PRODUCT', product});
        }).catch((err) => {
            dispatch({type: 'CREATE_PRODUCT_ERROR', err})
        });
    }
};



export const editProductAction = (productId, product) => {
     console.log('productId= ',productId,'product=  ',product)
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('products').doc(productId).update({
            // content: project.content,
            // title: project.title,
            defaltQty:product
        }).then(() => {
            console.log('Project edited');
            dispatch({type: 'EDIT_SUCCESS'});
        }).catch(err => {
            console.log('Project edit error');
            dispatch({type: 'EDIT_ERROR', err});
        });
    }
}