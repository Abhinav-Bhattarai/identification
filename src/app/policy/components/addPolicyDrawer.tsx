import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"


function Divider({ text }: { text: string }) {
    return <div className='flex items-center gap-2'>
        <span className='text-muted-foreground text-sm font-medium whitespace-nowrap'>{text}</span>
        <div className='h-[1px] bg-border w-full'></div>
    </div>
}

function InfoText({ children }: { children: string }) {
    return <p className='text-sm text-muted-foreground leading-[150%] max-w-[600px]'>{children}</p>
}

export default function AddPolicyDrawer() {
    return <div>
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    Add Filter
                </Button>
            </SheetTrigger>
            <SheetContent className='w-screen max-w-screen lg:max-w-[800px] p-0'>
                <SheetHeader className='flex flex-row items-center gap-4 justify-between flex-wrap p-6 border-b'>
                    <h2 className='text-muted-foreground font-medium'>Policies</h2>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <SheetClose asChild>
                            <Button variant='outline'>
                                <Cross2Icon className="h-4 w-4" />
                                <span className='pl-1'>Cancel</span>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button>
                                <CheckIcon />
                                <span className='pl-1'>Save Changes</span>
                            </Button>
                        </SheetClose>
                    </div>
                </SheetHeader>
                <section className='p-6'>
                    <h3 className="text-lg lg:text-xl font-semibold">Create New Policy</h3>
                    <form className='space-y-8 lg:space-y-12 pt-6 lg:pt-8'>

                        <div className='space-y-4'>
                            <label htmlFor="name" className='text-sm'>Name</label>
                            <Input id="name" placeholder='e.g. Spoof accounts' className='max-w-[400px]' />
                        </div>


                        <div className='space-y-4'>
                            <Divider text="Event group" />
                            <InfoText>
                                Select which type of event this policy should be applied to.
                            </InfoText>
                            <Select>
                                <SelectTrigger className="w-full max-w-[400px]">
                                    <SelectValue placeholder="Before other events" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='space-y-4'>
                            <Divider text="Inline action" />
                            <InfoText>
                                By default, when a policy matches, the configured inline action is returned in the Risk and Filter API Response, and further policy evaluation is halted. By enabling pass-through mode, the policy will not return any inline action when matched. Only the configured actions will be executed and evaluation will continue to the next policy.
                            </InfoText>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="enable-pass-through" />
                                <label
                                    htmlFor="enable-pass-through"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Enable pass through
                                </label>
                            </div>
                            <Select>
                                <SelectTrigger className="w-full max-w-[400px]">
                                    <SelectValue placeholder="allow" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='space-y-4'>
                            <Divider text="Trigger condition" />
                            
                        </div>
                        <Divider text="Actions" />
                    </form>
                </section>
            </SheetContent>
        </Sheet>
    </div>
}