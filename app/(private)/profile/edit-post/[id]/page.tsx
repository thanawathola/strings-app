"use client";
import useSWR from "swr";
import Form from "./form";
import DeleteBtn from "./deletebtn";


export default function EditPost({params}:{params:{id:number}}) {
    const {data,error,isLoading} = useSWR("/api/posts/"+ params.id)

    if(error) return <div>failed to load</div>
    if (isLoading) return <div>loading ...</div>

    return (
        <div>
            <h2>Edit Post</h2>
            <div className="flex flex-col gap-10">
            <Form post={data.data}/>
            <DeleteBtn post={data.data}/>
            </div>
        </div>
    )
}