import React from 'react';
import Card from './Card';
import Radio from './Radio';
import { MuiColorInput } from 'mui-color-input';

export default function Footer({
    theme, 
    setTheme,
    os, 
    setOS,
    size,
    setSize,
    customColors,
    setCustomColors
}) {
    return (
        <footer className='footer'>
            <div className="theme-card-wrapper">
                {
                    theme === "custom" &&
                    <Card customColorCard>
                        <div>
                            <h3>Text</h3>
                            <MuiColorInput 
                                value={customColors.text}
                                onChange={color => setCustomColors(prev => ({ ...prev, text: color }))}
                            />
                        </div>
                        <div>
                            <h3>Background</h3>
                            <MuiColorInput 
                                value={customColors.background}
                                onChange={color => setCustomColors(prev => ({ ...prev, background: color }))}
                            />
                        </div>
                    </Card>
                }
                <Card label="Theme">
                    <Radio 
                        label="Dark"
                        value="dark"
                        setState={setTheme}
                        checked={theme === "dark"}
                    />
                    <Radio 
                        label="Light"
                        value="light"
                        setState={setTheme}
                        checked={theme === "light"}
                    />
                    <Radio 
                        label="Custom"
                        value="custom"
                        setState={setTheme}
                        checked={theme === "custom"}
                    />
                </Card>
            </div>
            <Card label="OS">
                <Radio 
                    label="Windows 10"
                    value="windows10"
                    setState={setOS}
                    checked={os === "windows10"}
                />
                <Radio 
                    label="Windows 11"
                    value="windows11"
                    setState={setOS}
                    checked={os === "windows11"}
                />
            </Card>
            <Card label="Size">
                <Radio 
                    label="Normal"
                    value="normal"
                    setState={setSize}
                    checked={size === "normal"}
                />
                <Radio 
                    label="Big"
                    value="big"
                    setState={setSize}
                    checked={size === "big"}
                />
            </Card>
        </footer>
    );
}