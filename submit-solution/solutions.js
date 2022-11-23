export const two_queries_passing = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
	<declaration>// Place global declarations here.
clock t;
broadcast chan tik;
bool press=0;
</declaration>
	<template>
		<name x="5" y="5">Cround</name>
		<declaration>// Place local declarations here.
</declaration>
		<location id="id0" x="0" y="0">
			<label kind="invariant" x="-51" y="17">t &lt;= 1000</label>
		</location>
		<init ref="id0"/>
		<transition>
			<source ref="id0"/>
			<target ref="id0"/>
			<label kind="guard" x="-34" y="-144">t &gt;= 1000</label>
			<label kind="synchronisation" x="-17" y="-127">tik!</label>
			<label kind="assignment" x="-25" y="-102">t = 0</label>
			<nail x="-51" y="-102"/>
			<nail x="42" y="-102"/>
		</transition>
	</template>
	<template>
		<name>User</name>
		<location id="id1" x="0" y="0">
		</location>
		<init ref="id1"/>
		<transition>
			<source ref="id1"/>
			<target ref="id1"/>
			<label kind="synchronisation" x="-17" y="51">tik?</label>
			<label kind="assignment" x="-34" y="76">press = 0</label>
			<nail x="-59" y="76"/>
			<nail x="51" y="76"/>
		</transition>
		<transition>
			<source ref="id1"/>
			<target ref="id1"/>
			<label kind="synchronisation" x="-17" y="-119">tik?</label>
			<label kind="assignment" x="-33" y="-93">press = 1</label>
			<nail x="-51" y="-93"/>
			<nail x="51" y="-93"/>
		</transition>
	</template>
	<template>
		<name>User3</name>
		<declaration>int count=0;</declaration>
		<location id="id2" x="-68" y="-8">
		</location>
		<init ref="id2"/>
		<transition>
			<source ref="id2"/>
			<target ref="id2"/>
			<label kind="guard" x="-102" y="110">count &gt;= 3</label>
			<label kind="synchronisation" x="-76" y="102">tik?</label>
			<label kind="assignment" x="-93" y="127">press := 1,
count := 0</label>
			<nail x="-102" y="102"/>
			<nail x="-25" y="102"/>
			<nail x="-59" y="8"/>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id2"/>
			<label kind="guard" x="-93" y="-170">count &lt; 3</label>
			<label kind="synchronisation" x="-93" y="-187">tik?</label>
			<label kind="assignment" x="-93" y="-153">count := count + 1,
press := 0</label>
			<nail x="-102" y="-101"/>
			<nail x="-25" y="-101"/>
		</transition>
	</template>
	<template>
		<name>Switch</name>
		<declaration>int x=0;</declaration>
		<location id="id3" x="-425" y="-93">
			<name x="-433" y="-76">off</name>
		</location>
		<location id="id4" x="-178" y="-93">
			<name x="-187" y="-76">on</name>
		</location>
		<init ref="id3"/>
		<transition>
			<source ref="id4"/>
			<target ref="id4"/>
			<label kind="guard" x="-238" y="-238">press == 0 &amp;&amp; x &lt; 10</label>
			<label kind="synchronisation" x="-187" y="-255">tik?</label>
			<label kind="assignment" x="-204" y="-221">x = x + 1</label>
			<nail x="-204" y="-187"/>
			<nail x="-144" y="-187"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id3"/>
			<label kind="guard" x="-467" y="-212">press == 0</label>
			<label kind="synchronisation" x="-449" y="-195">tik?</label>
			<nail x="-467" y="-178"/>
			<nail x="-391" y="-178"/>
		</transition>
		<transition>
			<source ref="id4"/>
			<target ref="id3"/>
			<label kind="guard" x="-365" y="-59">press == 1 || x &gt;= 10</label>
			<label kind="synchronisation" x="-306" y="-42">tik?</label>
			<label kind="assignment" x="-314" y="-76">x := 0</label>
			<nail x="-297" y="-76"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id4"/>
			<label kind="guard" x="-340" y="-153">press == 1</label>
			<label kind="synchronisation" x="-407" y="-127">tik?</label>
			<nail x="-297" y="-127"/>
		</transition>
	</template>
	<system>system Cround, User3, Switch;
    </system>
	<queries>
		<query>
			<formula>A[] Switch.x &lt; 4</formula>
			<comment></comment>
		</query>
		<query>
			<formula>A[] Switch.x &lt; 10</formula>
			<comment></comment>
		</query>
	</queries>
</nta>`

const two_queries_failing = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
	<declaration>// Place global declarations here.
clock t;
broadcast chan tik;
bool press=0;
</declaration>
	<template>
		<name x="5" y="5">Cround</name>
		<declaration>// Place local declarations here.
</declaration>
		<location id="id0" x="0" y="0">
			<label kind="invariant" x="-51" y="17">t &lt;= 1000</label>
		</location>
		<init ref="id0"/>
		<transition>
			<source ref="id0"/>
			<target ref="id0"/>
			<label kind="guard" x="-34" y="-144">t &gt;= 1000</label>
			<label kind="synchronisation" x="-17" y="-127">tik!</label>
			<label kind="assignment" x="-25" y="-102">t = 0</label>
			<nail x="-51" y="-102"/>
			<nail x="42" y="-102"/>
		</transition>
	</template>
	<template>
		<name>User</name>
		<location id="id1" x="0" y="0">
		</location>
		<init ref="id1"/>
		<transition>
			<source ref="id1"/>
			<target ref="id1"/>
			<label kind="synchronisation" x="-17" y="51">tik?</label>
			<label kind="assignment" x="-34" y="76">press = 0</label>
			<nail x="-59" y="76"/>
			<nail x="51" y="76"/>
		</transition>
		<transition>
			<source ref="id1"/>
			<target ref="id1"/>
			<label kind="synchronisation" x="-17" y="-119">tik?</label>
			<label kind="assignment" x="-33" y="-93">press = 1</label>
			<nail x="-51" y="-93"/>
			<nail x="51" y="-93"/>
		</transition>
	</template>
	<template>
		<name>User3</name>
		<declaration>int count=0;</declaration>
		<location id="id2" x="-68" y="-8">
		</location>
		<init ref="id2"/>
		<transition>
			<source ref="id2"/>
			<target ref="id2"/>
			<label kind="guard" x="-102" y="110">count &gt;= 3</label>
			<label kind="synchronisation" x="-76" y="102">tik?</label>
			<label kind="assignment" x="-93" y="127">press := 1,
count := 0</label>
			<nail x="-102" y="102"/>
			<nail x="-25" y="102"/>
			<nail x="-59" y="8"/>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id2"/>
			<label kind="guard" x="-93" y="-170">count &lt; 3</label>
			<label kind="synchronisation" x="-93" y="-187">tik?</label>
			<label kind="assignment" x="-93" y="-153">count := count + 1,
press := 0</label>
			<nail x="-102" y="-101"/>
			<nail x="-25" y="-101"/>
		</transition>
	</template>
	<template>
		<name>Switch</name>
		<declaration>int x=0;</declaration>
		<location id="id3" x="-425" y="-93">
			<name x="-433" y="-76">off</name>
		</location>
		<location id="id4" x="-178" y="-93">
			<name x="-187" y="-76">on</name>
		</location>
		<init ref="id3"/>
		<transition>
			<source ref="id4"/>
			<target ref="id4"/>
			<label kind="guard" x="-238" y="-238">press == 0 &amp;&amp; x &lt; 10</label>
			<label kind="synchronisation" x="-187" y="-255">tik?</label>
			<label kind="assignment" x="-204" y="-221">x = x + 1</label>
			<nail x="-204" y="-187"/>
			<nail x="-144" y="-187"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id3"/>
			<label kind="guard" x="-467" y="-212">press == 0</label>
			<label kind="synchronisation" x="-449" y="-195">tik?</label>
			<nail x="-467" y="-178"/>
			<nail x="-391" y="-178"/>
		</transition>
		<transition>
			<source ref="id4"/>
			<target ref="id3"/>
			<label kind="guard" x="-365" y="-59">press == 1 || x &gt;= 10</label>
			<label kind="synchronisation" x="-306" y="-42">tik?</label>
			<label kind="assignment" x="-314" y="-76">x := 0</label>
			<nail x="-297" y="-76"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id4"/>
			<label kind="guard" x="-340" y="-153">press == 1</label>
			<label kind="synchronisation" x="-407" y="-127">tik?</label>
			<nail x="-297" y="-127"/>
		</transition>
	</template>
	<system>system Cround, User3, Switch;
    </system>
	<queries>
		<query>
			<formula>A[] deadlock</formula>
			<comment></comment>
		</query>
		<query>
			<formula>A[] Switch.x &lt; 3</formula>
			<comment></comment>
		</query>
	</queries>
</nta>`

export const one_query_passing_and_one_query_failing = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
	<declaration>// Place global declarations here.
clock t;
broadcast chan tik;
bool press=0;
</declaration>
	<template>
		<name x="5" y="5">Cround</name>
		<declaration>// Place local declarations here.
</declaration>
		<location id="id0" x="0" y="0">
			<label kind="invariant" x="-51" y="17">t &lt;= 1000</label>
		</location>
		<init ref="id0"/>
		<transition>
			<source ref="id0"/>
			<target ref="id0"/>
			<label kind="guard" x="-34" y="-144">t &gt;= 1000</label>
			<label kind="synchronisation" x="-17" y="-127">tik!</label>
			<label kind="assignment" x="-25" y="-102">t = 0</label>
			<nail x="-51" y="-102"/>
			<nail x="42" y="-102"/>
		</transition>
	</template>
	<template>
		<name>User</name>
		<location id="id1" x="0" y="0">
		</location>
		<init ref="id1"/>
		<transition>
			<source ref="id1"/>
			<target ref="id1"/>
			<label kind="synchronisation" x="-17" y="51">tik?</label>
			<label kind="assignment" x="-34" y="76">press = 0</label>
			<nail x="-59" y="76"/>
			<nail x="51" y="76"/>
		</transition>
		<transition>
			<source ref="id1"/>
			<target ref="id1"/>
			<label kind="synchronisation" x="-17" y="-119">tik?</label>
			<label kind="assignment" x="-33" y="-93">press = 1</label>
			<nail x="-51" y="-93"/>
			<nail x="51" y="-93"/>
		</transition>
	</template>
	<template>
		<name>User3</name>
		<declaration>int count=0;</declaration>
		<location id="id2" x="-68" y="-8">
		</location>
		<init ref="id2"/>
		<transition>
			<source ref="id2"/>
			<target ref="id2"/>
			<label kind="guard" x="-102" y="110">count &gt;= 3</label>
			<label kind="synchronisation" x="-76" y="102">tik?</label>
			<label kind="assignment" x="-93" y="127">press := 1,
count := 0</label>
			<nail x="-102" y="102"/>
			<nail x="-25" y="102"/>
			<nail x="-59" y="8"/>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id2"/>
			<label kind="guard" x="-93" y="-170">count &lt; 3</label>
			<label kind="synchronisation" x="-93" y="-187">tik?</label>
			<label kind="assignment" x="-93" y="-153">count := count + 1,
press := 0</label>
			<nail x="-102" y="-101"/>
			<nail x="-25" y="-101"/>
		</transition>
	</template>
	<template>
		<name>Switch</name>
		<declaration>int x=0;</declaration>
		<location id="id3" x="-425" y="-93">
			<name x="-433" y="-76">off</name>
		</location>
		<location id="id4" x="-178" y="-93">
			<name x="-187" y="-76">on</name>
		</location>
		<init ref="id3"/>
		<transition>
			<source ref="id4"/>
			<target ref="id4"/>
			<label kind="guard" x="-238" y="-238">press == 0 &amp;&amp; x &lt; 10</label>
			<label kind="synchronisation" x="-187" y="-255">tik?</label>
			<label kind="assignment" x="-204" y="-221">x = x + 1</label>
			<nail x="-204" y="-187"/>
			<nail x="-144" y="-187"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id3"/>
			<label kind="guard" x="-467" y="-212">press == 0</label>
			<label kind="synchronisation" x="-449" y="-195">tik?</label>
			<nail x="-467" y="-178"/>
			<nail x="-391" y="-178"/>
		</transition>
		<transition>
			<source ref="id4"/>
			<target ref="id3"/>
			<label kind="guard" x="-365" y="-59">press == 1 || x &gt;= 10</label>
			<label kind="synchronisation" x="-306" y="-42">tik?</label>
			<label kind="assignment" x="-314" y="-76">x := 0</label>
			<nail x="-297" y="-76"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id4"/>
			<label kind="guard" x="-340" y="-153">press == 1</label>
			<label kind="synchronisation" x="-407" y="-127">tik?</label>
			<nail x="-297" y="-127"/>
		</transition>
	</template>
	<system>system Cround, User3, Switch;
    </system>
	<queries>
		<query>
			<formula>A[] deadlock</formula>
			<comment></comment>
		</query>
		<query>
			<formula>A[] not deadlock</formula>
			<comment></comment>
		</query>
	</queries>
</nta>`