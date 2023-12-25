import React from 'react'

export default function HandleChangeSido(event, setSelectedSido) {
  const newSelectedSido = event.target.value;
  setSelectedSido(newSelectedSido);
  return (
    console.log('선택된 시/도 : ',newSelectedSido)
  )
}
