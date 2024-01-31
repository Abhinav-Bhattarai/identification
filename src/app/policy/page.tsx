import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Rules from './tabs/rules'
import AddPolicyDrawer from './components/addPolicyDrawer'

export default function Page() {
    return (
        <main className='max-w-7xl min-h-screen mx-auto py-4 lg:py-8 space-y-4 lg:space-y-8 bg-background border border-border rounded-b-md'>
            <header className='px-4 lg:px-8 flex items-center justify-between gap-4 flex-wrap'>
                <div>
                    <h1 className='font-bold text-lg'>Policies</h1>
                    <p className='text-sm'>Set up rules for real time decisioning and automation. <span className='font-bold'>Learn more</span></p>
                </div>
                <AddPolicyDrawer />
            </header>
            <section>
                <Tabs defaultValue="rules" className="w-full overflow-auto">
                    <TabsList className='mx-4 lg:mx-8'>
                        <TabsTrigger value="rules">Rules</TabsTrigger>
                        <TabsTrigger value="archived">Archived</TabsTrigger>
                        <TabsTrigger value="integrations">Integrations</TabsTrigger>
                    </TabsList>
                    <div className='bg-border h-[1px] my-4 lg:my-8 w-full'>

                    </div>
                    <TabsContent value="rules" className='px-4 lg:px-8'>
                        <Rules />
                    </TabsContent>
                    <TabsContent value="integrations" className='px-4 lg:px-8'>Integrations</TabsContent>
                    <TabsContent value="archived" className='px-4 lg:px-8'>Archived</TabsContent>
                </Tabs>
            </section>
        </main>
    )
}
