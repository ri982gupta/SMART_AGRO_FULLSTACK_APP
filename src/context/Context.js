import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";
const Cart = createContext();


const Context = ({ children }) => {

    const products = [{
        id: 1,
        name: 'Andriod Developement',
        smallPara: " you will learn basis of Andriod Developement",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcZ3NIKp_42YKN3sOtFskkll5mWF0ytSM9EonIPR4AT8xrRdiyMJ23sg3X9MOIvr2EgO8wnWlJJ8betitIlGD4wA4bIXoxls3wwNoZiWMDfpjQFwGnGm0m5S5LOC4dGMpW8XFChAYstYi4bu587eU1ooPYzV1Kb1PSGzj8N8cKs0cXN_NhB2yJYlbGQQ/s320/Andriod.png',
        level: "Beginner",
        type: 'technical'
    },
    {
        id: 2,
        name: 'C++',
        duration: '5 hours',
        smallPara: "In this course you will learn basis of C++",
        price: 'Free',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVghlppi_TVhsLGmfiTPSfcS1vcXhkNaELSzWFOgIhoWQbGoqW5oaE6AquwMMPbtFqkBZf0Z5cqAi0GUJWlC-pqbM5FYwDazM3anje0bHxLz6brucUZTupmh6-3bO5rx1F_g_RcGUN--0mHwDdgx_3R2s1Ay4dYFC9Mlt90gTOgIoLOZPT2DZ6aFsctw/s320/C++.jpeg',
        level: "Beginner",
        type: "technical"
    },
    {
        id: 3,
        name: 'Java',
        duration: '5 hours',
        smallPara: "In this course you will learn basis of java",
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRjRdg82QYkoyvvVB50mYW4OY9NUEQX1NcCmiLGBNvDG8Sw3VHlP0G46X9xecmrCKK4ieRU2Wo_tUPUFriyEDHeG8POx5jhntxMJaFV9pEE37CDUYvpDQNb4d1Si6Zx3vltcaOHN8cG_zDON11uWs4jL696C0ucvCSdxP9FEvmTarYJRfh-Vs2LgTcUQ/s320/java.jpeg',
        level: "Beginner",
        type: "technical"
    },
    {
        id: 4,
        name: 'Python',
        duration: '5 hours',
        smallPara: "In this course you will learn basis of Python",
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhig_7VmEZHi3o_jQI8c9uxWBO099LgLZ5bmBU7-zVzDwJ2wMCghl_eWimNVbIUA4KUNbOQQjD4FoUNbCms24iU-BUbVZJIsFZqiZ35gr5UlyqWntX44ku043U3ay97O4KzkLZQGodnGjXaPUV14CH5Y-9whRwaGTTW0fuyqXu1ThmVDmrfQhB85HceTg/s320/Python.jpeg',
        level: "Beginner",
        type: "technical"
    },
    {
        id: 5,
        name: '100 Days of Python',
        smallPara: "In this course you will code python for 100 days this course require intermidate level",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhruSWu_yrb4IKpaWUpLwPRRupQnc6R6v-rxS5CXdMiqtEjRPPjdgTlB47yjwJb6stFknmnalOZJlwkVQEyPTBayg0XkWx3RF2g1Cm3iE0uTZk5LEuHUzCyooUD1MoFpG8u9zjWi1zmo3tlvx9q337tn5IEX71J03rbPkYeHpBzMoOPL04rCzLbYqfDTA/s320/100%20Python.png',
        level: "Intermediate",
        type: "technical"
    },
    {
        id: 6,
        name: 'Web Developement',
        smallPara: "In this course you will learn basis of Web Developement",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizo5-BZR7vnStg06Y-2qTt7UEH__VnvKdIjW9dMnY2ePAi3W2AOdAAIOezHuc-kCQU2knaJ8IsSy6C8LNWkBYxeuj5Ib_0479a4JGYBXHo7sBMiwuOqRqVfSdlNOt5q7UkNIyNwmCvx_q9YnJ-aXVgJE4lXFeMGu13JJDGSMIOB4qFthLjUKTquYW7gw/s320/Web%20developement.webp',
        level: "Beginner",
        type: 'technical'
    },
    {
        id: 7,
        name: 'Life Skills',
        smallPara: "In this course you will learn Life Skills",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV3EFk7Eem1cTeHdb6Qov_SsVMtwfFYEFrF2DtxN0cWtPJvOrybSU7Yxh-0MIIZmQFp3erl3IOAyfXFrJN2YLm_9EXvGyvpb98v7ApFe50elrmkM86tRM-Ev1Wm4eqbUuUq7vTA5b-gRob_0l6hN_jSUq1f746jcuk9J0fSn6iHG_WMy_CKqUXAgz9vg/s320/1.jpeg',
        type: 'softskill'
    },
    {
        id: 8,
        name: 'Public Speaking',
        smallPara: "this course Improve your public Speaking Skills",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8K119wkpIf8HQRsvdN-gnFyUPr9nYzF4JYnaXNtM7MwcE78-fpBhUuI0xtjL0I5qNE8CMt5oWO4_Hr63JanSqIO8WAWeT6k19tC-1MuC3slw4IN_vau6ThMaeMh-oA72KLGfeivnPR0lwabqZA8am77oGE1Mo3I4KvrQFAygtsotAG_6Cudso1j5p1A/s320/2.png',
        type: 'softskill'
    },
    {
        id: 9,
        name: 'Professional Writing',
        smallPara: "In this course you will learn Writing Skills",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAEORETeR9TwSGrMt4fLVf6WmJQqbW6znxAp0RgyZZx3RzF5pTYAqXnlXEuBPDJFhJ5RT4eDjrTNI_aCsQguPojOVwvBzzaHG5ediTN0-FZLjLPOTdvhrEb5nwH-PtLqiLvoDEFDxyiHfWFUhFXoYt6v58nTY0FPz2fDqOtZUpcgd7wVB2kJKD22VAbg/s320/3.webp',
        type: 'softskill'
    },
    {
        id: 10,
        name: 'Soft Skills',
        smallPara: "In this course you will learn Soft Skills",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV3EFk7Eem1cTeHdb6Qov_SsVMtwfFYEFrF2DtxN0cWtPJvOrybSU7Yxh-0MIIZmQFp3erl3IOAyfXFrJN2YLm_9EXvGyvpb98v7ApFe50elrmkM86tRM-Ev1Wm4eqbUuUq7vTA5b-gRob_0l6hN_jSUq1f746jcuk9J0fSn6iHG_WMy_CKqUXAgz9vg/s320/1.jpeg',
        type: 'softskill'
    },
    {
        id: 11,
        name: 'Time Management',
        smallPara: "In this course you will learn Time management",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgps6IU32Bj9OAplsz4lW_Cgs_3cRHpNC1fC9qdBZar0rIMnPK7clBl8ypdcSnXJHI502_JjG2b7rH2TVV07HKU-xnKNebqKPYEm6cV_t2XhK7db4WEDEmcxbgdW6tlm99kMM3dh3csOI8ruR3dMCWUMdKHcZftOflJZfbOkp-tUD4aCx7h9b1Pva8RPg/s320/6.jpeg',
        type: 'softskill'
    },
    {
        id: 12,
        name: 'Business Skill',
        smallPara: "In this course you will learn business skill",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqlfB9Qrn2TRycMs4DK0IlXfv8URh47DNsoaO9REU8VCVbX--0WFLAWNkySuNKSPbocgeaqAP0DnHuvBV044mFswZUX6_ywBbNm4qwIStgtLOonwVeFL7iE-UlDRU3_3Esv6duVh7ih-K3W03wTVgpjlEN5OvEduWGnFoDN51wItRyyhvz-d-IVSR90Q/s320/b2.jpeg',
        type: 'BS'
    },
    {
        id: 13,
        name: 'Content Writing',
        smallPara: "In this course you will learn content Writing",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWMeIbQNRcd0e69_FiCt6WJNGgQ_aUF2Pb9z3oyaGSlU3S6AJ-qwciNRyvGTSXAvRbq1aq7vt90Aw7bJRE1K1MJ0gjRhSEgYMDlEbUyDfR1UIJi1YOupAmJcCgs6Hbhsgm9vJ2vFtKWpx4WdBXAt-viTJEv-JanRAc-v2imF-bbA_P0b9X1m4Kgfs29A/s320/b3.png',
        type: 'BS'
    },
    {
        id: 14,
        name: 'Management Skill',
        smallPara: "In this course you will learn management skill",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0oQHwEbUs7tkwl3chLNJLpMZiw-78lcmuE5lu1UmdQlSZ504Kr67IQs1pdvlWasx4uXRBLiEWES-MYNJLG_5NYlKvnepdwMqjt8-BgTa-Q_BKjMOncsgWgekDLTSvvUkc5jBEgwXcw_pG1z9eaJS3sul-osocKnhSOfNnMdXuRHjzqMoYsT3jDIvmJA/s320/b4.jpeg',
        type: "BS"
    },
    {
        id: 15,
        name: 'Digital Marketing',
        smallPara: "In this course you will learn Digital Markiting",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJlg_4a1ZPcGjKuowURs3ltgFOkrlUH9WsdycynU9ArdBMdrakvVQSObaF7lj6f56wJz4DmbpO_RHRhOs6BiXlf_Nz5eyluPzh_G4iGMpUvEoM40VZmWW7yBnrnMuIJ-wycC7Nlb7VrfMX5CUv1r04KmMNk1mx0ZjeXOp63v3Jg1lN5UjToRT9Mn5mIQ/s320/b5.jpeg',
        type: "BS"
    },
    {
        id: 16,
        name: 'Sales Marketing',
        smallPara: "In this course you will learn Sales Markiting",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9RE-ySnC7QQPh_8UmjWIbheOJ1smQvZCQAyBfy4xu4lfvm_YOQwAhAcM_Bw0KC93Sz-Atz70_Hd8cIm9PahKPQctyX0gjjZUxtbPrumnOuN100zhci9EiOMULGmP9RDhlGwbjZMiKeE_069D4nYc0jbYC-_1ZK_WjJ0JZhmpayLf13ZwCGCWuf3X1WA/s320/b6.jpeg',
        type: 'BS'
    },
    {
        id: 17,
        name: 'Time Management',
        smallPara: "In this course you will learn Time management",
        duration: '5 hours',
        price: "Free",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRRXAVlRl2SOOpQCJDvv_dXhP-5L-VvOBMpqx1nN9AR1MyFBW9Ebo1DWmRICZpJvT0piP5SAH7WBOiCpqRvLVqr6Rxp-TiOcgtJwAUwxmTKRLB5gJRbmlNiTirJt_jObw8iTZnYQRx8DfaLNMwOlIyZI4vyw5RYNsH7_J1Q3QB2E4b9eX7vRsCfw6RHA/s320/b7.jpeg',
        type: 'BS'
    },



    {
        id: 123432,
        name: 'xyz',
        smallPara: "In this course you will learn basis of Web Developement",
        duration: '5 hours',
        price: 23,
        image: 'https://images.unsplash.com/photo-1659948782675-9d4fadea983b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'uhv'
    },

    ]



    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })



    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}