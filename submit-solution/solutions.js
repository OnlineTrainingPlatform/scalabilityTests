export const light_switch_solution_1 = `<?xml version="1.0" encoding="utf-8"?>
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

export const light_switch_solution_2 = `<?xml version="1.0" encoding="utf-8"?>
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

export const light_switch_solution_3 = `<?xml version="1.0" encoding="utf-8"?>
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

export const buzzing_boys_solution_1 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
	<declaration>const int 	N = 4;         // # Boys
typedef int[0,N-1] id_t;

broadcast chan start_call[N][N], end_call[N];

bool available[N] = { true, true, true, true };

bool can_call[N][N] = {
    { false, true, false, false },
    { true, false, true, false },
    { false, true, false, true },
    { false, false, true, false }
};

bool known_secrets[N][N] = {
    { true, false, false, false },
    { false, true, false, false },
    { false, false, true, true  },
    { false, false, false, true }
};

void exchange_secrets(id_t e, id_t id) {
}

bool everyone_knows_everything() {
    int i;
    int j;
    for (i = 0; i &lt; N; ++i) {
        for (j = 0; j &lt; N; ++j) {
            if (!known_secrets[i][j]) {
                return false;
            }
        }
    }
    return true;
}</declaration>
	<template>
		<name>Observer</name>
		<declaration>clock total_timer;
int call_count = 1;</declaration>
		<location id="id0" x="0" y="0">
		</location>
		<location id="id1" x="280" y="0">
			<name x="270" y="-34">Finished</name>
		</location>
		<init ref="id0"/>
		<transition>
			<source ref="id0"/>
			<target ref="id1"/>
			<label kind="guard" x="51" y="-25">everyone_knows_everything()</label>
		</transition>
		<transition>
			<source ref="id0"/>
			<target ref="id0"/>
			<label kind="select" x="-34" y="-136">e : id_t</label>
			<label kind="synchronisation" x="-42" y="-119">end_call[e]?</label>
			<label kind="assignment" x="-42" y="-102">call_count++</label>
			<nail x="-76" y="-76"/>
			<nail x="85" y="-76"/>
		</transition>
	</template>
	<template>
		<name x="5" y="5">Boy</name>
		<parameter>const id_t id</parameter>
		<declaration>clock call_timer;
id_t talking_to;</declaration>
		<location id="id2" x="76" y="246">
			<name x="51" y="263">Available</name>
		</location>
		<location id="id3" x="76" y="68">
			<name x="93" y="26">Busy</name>
			<label kind="invariant" x="93" y="43">call_timer &lt;= 60</label>
		</location>
		<init ref="id2"/>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="synchronisation" x="-399" y="153">end_call[id]?</label>
			<label kind="assignment" x="-433" y="178">available[id] = true</label>
			<nail x="-297" y="0"/>
			<nail x="-297" y="314"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="guard" x="-289" y="136">call_timer == 60</label>
			<label kind="synchronisation" x="-289" y="153">end_call[talking_to]!</label>
			<label kind="assignment" x="-289" y="170">available[id] = true</label>
			<nail x="-153" y="68"/>
			<nail x="-153" y="246"/>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id3"/>
			<label kind="select" x="-17" y="84">e : id_t</label>
			<label kind="guard" x="-136" y="102">available[e] &amp;&amp; can_call[id][e]</label>
			<label kind="synchronisation" x="-34" y="127">start_call[id][e]!</label>
			<label kind="assignment" x="-85" y="152">exchange_secrets(e, id),
available[id] = false,
call_timer = 0,
talking_to = e</label>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id3"/>
			<label kind="select" x="178" y="102">e : id_t</label>
			<label kind="synchronisation" x="161" y="127">start_call[e][id]?</label>
			<label kind="assignment" x="161" y="153">available[id] = false,
call_timer = 0,
talking_to = e</label>
			<nail x="144" y="246"/>
			<nail x="144" y="68"/>
		</transition>
	</template>
	<system>// Place template instantiations here.
Boy0 = Boy(0);
Boy1 = Boy(1);
Boy2 = Boy(2);
Boy3 = Boy(3);
Observer0 = Observer();
// List one or more processes to be composed into a system.
system Boy0, Boy1, Boy2, Boy3, Observer0;
    </system>
	<queries>
		<query>
			<formula>E&lt;&gt; not (Boy0.Available and Boy1.Busy)</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; Observer0.Finished &amp;&amp; Observer0.call_count == 4</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; not deadlock</formula>
			<comment></comment>
		</query>
	</queries>
</nta>`
export const buzzing_boys_solution_2 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
	<declaration>const int 	N = 4;         // # Boys
typedef int[0,N-1] id_t;

broadcast chan start_call[N][N], end_call[N];

bool available[N] = { true, true, true, true };

bool can_call[N][N] = {
    { false, true, false, false },
    { true, false, true, false },
    { false, true, false, true },
    { false, false, true, false }
};

bool known_secrets[N][N] = {
    { true, false, false, false },
    { false, true, false, false },
    { false, false, true, false },
    { false, false, false, true }
};

void exchange_secrets(id_t e, id_t id) {
    int i;
    for (i = 0; i &lt; N; ++i) {
        known_secrets[e][i] |= known_secrets[id][i];
        known_secrets[id][i] = known_secrets[e][i];
    }
}

bool everyone_knows_everything() {
    int i;
    int j;
    for (i = 0; i &lt; N; ++i) {
        for (j = 0; j &lt; N; ++j) {
            if (!known_secrets[i][j]) {
                return false;
            }
        }
    }
    return true;
}</declaration>
	<template>
		<name>Observer</name>
		<declaration>clock total_timer;
int call_count = 1;</declaration>
		<location id="id0" x="0" y="0">
		</location>
		<location id="id1" x="280" y="0">
			<name x="270" y="-34">Finished</name>
		</location>
		<init ref="id0"/>
		<transition>
			<source ref="id0"/>
			<target ref="id1"/>
			<label kind="guard" x="51" y="-25">everyone_knows_everything()</label>
		</transition>
		<transition>
			<source ref="id0"/>
			<target ref="id0"/>
			<label kind="select" x="-34" y="-136">e : id_t</label>
			<label kind="synchronisation" x="-42" y="-119">end_call[e]?</label>
			<label kind="assignment" x="-42" y="-102">call_count++</label>
			<nail x="-76" y="-76"/>
			<nail x="85" y="-76"/>
		</transition>
	</template>
	<template>
		<name x="5" y="5">Boy</name>
		<parameter>const id_t id</parameter>
		<declaration>clock call_timer;
id_t talking_to;</declaration>
		<location id="id2" x="76" y="246">
			<name x="51" y="263">Available</name>
		</location>
		<location id="id3" x="76" y="68">
			<name x="93" y="26">Busy</name>
			<label kind="invariant" x="93" y="43">call_timer &lt;= 60</label>
		</location>
		<init ref="id2"/>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="synchronisation" x="-399" y="153">end_call[id]?</label>
			<label kind="assignment" x="-433" y="178">available[id] = true</label>
			<nail x="-297" y="0"/>
			<nail x="-297" y="314"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="guard" x="-289" y="136">call_timer == 60</label>
			<label kind="synchronisation" x="-289" y="153">end_call[talking_to]!</label>
			<label kind="assignment" x="-289" y="170">available[id] = true</label>
			<nail x="-153" y="68"/>
			<nail x="-153" y="246"/>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id3"/>
			<label kind="select" x="-17" y="84">e : id_t</label>
			<label kind="guard" x="-136" y="102">available[e] &amp;&amp; can_call[id][e]</label>
			<label kind="synchronisation" x="-34" y="127">start_call[id][e]!</label>
			<label kind="assignment" x="-85" y="152">exchange_secrets(e, id),
available[id] = false,
call_timer = 0,
talking_to = e</label>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id3"/>
			<label kind="select" x="178" y="102">e : id_t</label>
			<label kind="synchronisation" x="161" y="127">start_call[e][id]?</label>
			<label kind="assignment" x="161" y="153">available[id] = false,
call_timer = 0,
talking_to = e</label>
			<nail x="144" y="246"/>
			<nail x="144" y="68"/>
		</transition>
	</template>
	<system>// Place template instantiations here.
Boy0 = Boy(0);
Boy1 = Boy(1);
Boy2 = Boy(2);
Boy3 = Boy(3);
Observer0 = Observer();
// List one or more processes to be composed into a system.
system Boy0, Boy1, Boy2, Boy3, Observer0;
    </system>
	<queries>
		<query>
			<formula>E&lt;&gt; not (Boy0.Available and Boy1.Busy)</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; Observer0.Finished &amp;&amp; Observer0.call_count == 4</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; not deadlock</formula>
			<comment></comment>
		</query>
	</queries>
</nta>`
export const buzzing_boys_solution_3 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
	<declaration>const int 	N = 4;         // # Boys
typedef int[0,N-1] id_t;

broadcast chan start_call[N][N], end_call[N];

bool available[N] = { true, true, true, true };

bool can_call[N][N] = {
    { false, true, false, false },
    { true, false, true, false },
    { false, true, false, true },
    { false, false, true, false }
};

bool known_secrets[N][N] = {
    { true, false, false, false },
    { false, true, false, false },
    { false, false, true, false },
    { false, false, false, true }
};

void exchange_secrets(id_t e, id_t id) {
    int i;
    for (i = 0; i &lt; N; ++i) {
        known_secrets[e][i] |= known_secrets[id][i];
        known_secrets[id][i] = known_secrets[e][i];
    }
}

bool everyone_knows_everything() {
    int i;
    int j;
    for (i = 0; i &lt; N; ++i) {
        for (j = 0; j &lt; N; ++j) {
            if (!known_secrets[i][j]) {
                return false;
            }
        }
    }
    return true;
}</declaration>
	<template>
		<name>Observer</name>
		<declaration>clock total_timer;
int call_count = 1;</declaration>
		<location id="id0" x="0" y="0">
		</location>
		<location id="id1" x="280" y="0">
			<name x="270" y="-34">Finished</name>
		</location>
		<init ref="id0"/>
		<transition>
			<source ref="id0"/>
			<target ref="id1"/>
			<label kind="guard" x="51" y="-25">everyone_knows_everything()</label>
		</transition>
		<transition>
			<source ref="id0"/>
			<target ref="id0"/>
			<label kind="select" x="-34" y="-136">e : id_t</label>
			<label kind="synchronisation" x="-42" y="-119">end_call[e]?</label>
			<label kind="assignment" x="-42" y="-102">call_count++</label>
			<nail x="-76" y="-76"/>
			<nail x="85" y="-76"/>
		</transition>
	</template>
	<template>
		<name x="5" y="5">Boy</name>
		<parameter>const id_t id</parameter>
		<declaration>clock call_timer;
id_t talking_to;</declaration>
		<location id="id2" x="76" y="246">
			<name x="51" y="263">Available</name>
		</location>
		<location id="id3" x="76" y="68">
			<name x="93" y="26">Busy</name>
			<label kind="invariant" x="93" y="43">call_timer &lt;= 60</label>
		</location>
		<init ref="id2"/>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="synchronisation" x="-399" y="153">end_call[id]?</label>
			<label kind="assignment" x="-433" y="178">available[id] = true</label>
			<nail x="-297" y="0"/>
			<nail x="-297" y="314"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="guard" x="-289" y="136">call_timer == 60</label>
			<label kind="synchronisation" x="-289" y="153">end_call[talking_to]!</label>
			<label kind="assignment" x="-289" y="170">available[id] = true</label>
			<nail x="-153" y="68"/>
			<nail x="-153" y="246"/>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id3"/>
			<label kind="select" x="178" y="102">e : id_t</label>
			<label kind="synchronisation" x="161" y="127">start_call[e][id]?</label>
			<label kind="assignment" x="161" y="153">available[id] = false,
call_timer = 0,
talking_to = e</label>
			<nail x="144" y="246"/>
			<nail x="144" y="68"/>
		</transition>
	</template>
	<system>// Place template instantiations here.
Boy0 = Boy(0);
Boy1 = Boy(1);
Boy2 = Boy(2);
Boy3 = Boy(3);
Observer0 = Observer();
// List one or more processes to be composed into a system.
system Boy0, Boy1, Boy2, Boy3, Observer0;
    </system>
	<queries>
		<query>
			<formula>E&lt;&gt; not (Boy0.Available and Boy1.Busy)</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; Observer0.Finished &amp;&amp; Observer0.call_count == 4</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; not deadlock</formula>
			<comment></comment>
		</query>
	</queries>
</nta>`
export const buzzing_boys_solution_4 = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
	<declaration>const int 	N = 4;         // # Boys
typedef int[0,N-1] id_t;

broadcast chan start_call[N][N], end_call[N];

bool available[N] = { true, true, true, true };

bool can_call[N][N] = {
    { false, true, false, false },
    { true, false, true, false },
    { false, true, false, true },
    { false, false, true, false }
};

bool known_secrets[N][N] = {
    { true, false, false, false },
    { false, true, false, false },
    { false, false, true, false },
    { false, false, false, true }
};

void exchange_secrets(id_t e, id_t id) {
    int i;
    for (i = 0; i &lt; N; ++i) {
        known_secrets[e][i] |= known_secrets[id][i];
        known_secrets[id][i] = known_secrets[e][i];
    }
}

bool everyone_knows_everything() {
    int i;
    int j;
    for (i = 0; i &lt; N; ++i) {
        for (j = 0; j &lt; N; ++j) {
            if (!known_secrets[i][j]) {
                return false;
            }
        }
    }
    return true;
}</declaration>
	<template>
		<name>Observer</name>
		<declaration>clock total_timer;
int call_count = 1;</declaration>
		<location id="id0" x="0" y="0">
		</location>
		<location id="id1" x="280" y="0">
			<name x="270" y="-34">Finished</name>
		</location>
		<init ref="id0"/>
		<transition>
			<source ref="id0"/>
			<target ref="id1"/>
			<label kind="guard" x="51" y="-25">everyone_knows_everything()</label>
		</transition>
	</template>
	<template>
		<name x="5" y="5">Boy</name>
		<parameter>const id_t id</parameter>
		<declaration>clock call_timer;
id_t talking_to;</declaration>
		<location id="id2" x="76" y="246">
			<name x="51" y="263">Available</name>
		</location>
		<location id="id3" x="76" y="68">
			<name x="93" y="26">Busy</name>
			<label kind="invariant" x="93" y="43">call_timer &lt;= 60</label>
		</location>
		<init ref="id2"/>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="synchronisation" x="-399" y="153">end_call[id]?</label>
			<label kind="assignment" x="-433" y="178">available[id] = true</label>
			<nail x="-297" y="0"/>
			<nail x="-297" y="314"/>
		</transition>
		<transition>
			<source ref="id3"/>
			<target ref="id2"/>
			<label kind="guard" x="-289" y="136">call_timer == 60</label>
			<label kind="synchronisation" x="-289" y="153">end_call[talking_to]!</label>
			<label kind="assignment" x="-289" y="170">available[id] = true</label>
			<nail x="-153" y="68"/>
			<nail x="-153" y="246"/>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id3"/>
			<label kind="select" x="-17" y="84">e : id_t</label>
			<label kind="guard" x="-136" y="102">available[e] &amp;&amp; can_call[id][e]</label>
			<label kind="synchronisation" x="-34" y="127">start_call[id][e]!</label>
			<label kind="assignment" x="-85" y="152">exchange_secrets(e, id),
available[id] = false,
call_timer = 0,
talking_to = e</label>
		</transition>
		<transition>
			<source ref="id2"/>
			<target ref="id3"/>
			<label kind="select" x="178" y="102">e : id_t</label>
			<label kind="synchronisation" x="161" y="127">start_call[e][id]?</label>
			<label kind="assignment" x="161" y="153">available[id] = false,
call_timer = 0,
talking_to = e</label>
			<nail x="144" y="246"/>
			<nail x="144" y="68"/>
		</transition>
	</template>
	<system>// Place template instantiations here.
Boy0 = Boy(0);
Boy1 = Boy(1);
Boy2 = Boy(2);
Boy3 = Boy(3);
Observer0 = Observer();
// List one or more processes to be composed into a system.
system Boy0, Boy1, Boy2, Boy3, Observer0;
    </system>
	<queries>
		<query>
			<formula>E&lt;&gt; not (Boy0.Available and Boy1.Busy)</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; Observer0.Finished &amp;&amp; Observer0.call_count == 4</formula>
			<comment></comment>
		</query>
		<query>
			<formula>E&lt;&gt; not deadlock</formula>
			<comment></comment>
		</query>
	</queries>
</nta>`