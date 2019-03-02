import typeReducer from '../src/redux/reducers/typeReducer';

test('typeReducer should initally be an empty array', () => {
    const action = {};
    const returnedState = typeReducer(undefined, action);
    expect(Array.isArray(returnedState)).toBe(true);
    expect(returnedState.length).toBe(0);
  });

test('typeReducer should be an array of of items', () =>{
    const action =[];
    const returnedState = typeReducer(undefined,action);
    expect(returnedState).toEqual([
        {
            "id": 1,
            "adventure_type": "Hiking"
        },
        {
            "id": 2,
            "adventure_type": "Dual Sport"
        },
        {
            "id": 3,
            "adventure_type": "Road"
        },
        {
            "id": 4,
            "adventure_type": "Photography"
        }
    ]);
})

