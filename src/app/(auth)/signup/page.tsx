import { RegisterForm } from '@/features/auth/components/register-form'
import { requireNoAuth } from '@/lib/auth-utils'

const Page = async () => {
    await requireNoAuth()
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <RegisterForm />
        </div>
    )
}

export default Page