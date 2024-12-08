export const getContact = (req,res)=>{
    res.status(200).json({msg:"get all contact"})
}

export const getContactWithId =((req,res)=>{
    res.status(200).json({msg:`get contact with id ${req.params.id}`})
})

export const postContact =((req,res)=>{
    res.status(201).json({msg:"create contact"})
})

export const updateContact =((req,res)=>{
    res.status(200).json({msg:`update contact with id ${req.params.id}`})
})

export const deleteContact =((req,res)=>{
    res.status(200).json({msg:`delete contact with id ${req.params.id}`})
})


