export default class dotenv{
    constructor(){
        this.MongoDBLINK()
        this.STRIPE_KEY()
        this.Send_Email_Api_Key()
        this.TokenSecret()
        this.cloud_Api_Key()
        this.cloud_Api_Secret()
        this.cloud_name()
    }
    public MongoDBLINK(){
        const MongoLink = 'mongodb+srv://mohamedmostafa:09705886877a@blogs.cq7zo.mongodb.net/BookSystem?authSource=admin&replicaSet=atlas-y8ut2u-shard-0&readPreference=primary&ssl=true' as string
        return MongoLink
    }

    public TokenSecret(){
        const tokenSecret = 'hadjashdjadjalnkakddajvdashvd' as string
        return tokenSecret
    }

    public STRIPE_KEY(){
        const stripeKey = 'sk_test_51LtvUpD4uJFGkAiOSln8TXtJremuq32GI1VKxPWk2wRN8ilmKoUDt0hcviww4zrOy08udSbFVg72zEc8fSuXkxn400jSNS6a69' as string
        return stripeKey
    }

    public Send_Email_Api_Key(){
        const sendEmailApiKey = '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' as string
        return sendEmailApiKey
    }

    public cloud_name(){
        const cloudName = 'ebi-999' as string
        return cloudName
    }

    public cloud_Api_Key(){
        const cloudApiKey = '336841229783222' as string
        return cloudApiKey
    }

    public cloud_Api_Secret(){
        const cloudApiSecret = 'M4ueOa90O-x-UQYP-U0wzERe5pA' as string
        return cloudApiSecret
    }
}